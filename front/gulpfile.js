const path = require('path');
const fs = require('fs');

const Builder = require('gulp-bem-bundle-builder');
const bundler = require('gulp-bem-bundler-fs');

const gulp = require('gulp');
const debug = require('gulp-debug');
const filter = require('through2-filter').obj;
const merge = require('merge2');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');
const gulpOneOf = require('gulp-one-of');
const uglify = require('gulp-uglify');

const bemxjst = require('gulp-bem-xjst');
const replace = require('gulp-replace');
const gulpFn  = require('gulp-fn');

const bemhtml = bemxjst.bemhtml;
const toHtml = bemxjst.toHtml;

const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssEach = require('postcss-each');
const postcssFor = require('postcss-for');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssCalc = require('postcss-calc');
const postcssNested = require('postcss-nested');
const rebemCss = require('rebem-css');
const postcssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');
const postcssReporter = require('postcss-reporter');
const csso = require('gulp-csso');

const YENV = process.env.YENV || 'development';
const isProd = YENV === 'production';

const pathToYm = require.resolve('ym');

const builder = Builder({
    levels: [
        'node_modules/bem-core/common.blocks',
        'node_modules/bem-core/desktop.blocks',
        'node_modules/bem-components/common.blocks',
        'node_modules/bem-components/desktop.blocks',
        'node_modules/bem-components/design/common.blocks',
        'node_modules/bem-components/design/desktop.blocks',
        'common.blocks',
        'desktop.blocks'
    ],
    techMap: {
        bemhtml: ['bemhtml.js'],
        js: ['vanilla.js', 'browser.js', 'js'],
        css: ['post.css', 'css']
    }
});

const rename = require("gulp-rename");

const makeStartWithUpperCase = str => str[0].toUpperCase() + str.slice(1);
const kebabToPascal = string => string.split('-')
    .map(makeStartWithUpperCase)
    .join('');

const distFolder = 'dist';

let blockName = '';
let blockDir = '';

const createJSX = (blockName, blockDir) => {
    const jsxName = `${blockName}.js`;
    const jsxData = `import React from 'react';
import './${blockName}.scss';

const ${blockName} = () => (
  <div className="${blockName}"></div>
);

export default ${blockName};
`;
    const jsxDirname = `${blockDir}/${jsxName}`;
    // fs.mkdirSync(jsxDirname);
    console.log(blockDir);
    fs.writeFileSync(jsxDirname, jsxData);
};

const createElem = (blockName, blockDir, elemName, elemContent) => {
    const fullElemName = `${blockName}-${elemName}`;
    const elemDir = `${blockDir}/-${elemName}`;
    fs.mkdirSync(elemDir);
};

gulp.task('css', function () {
    return gulp.src('./common.blocks/**/*.scss')
        // .pipe(postcss([rebemCss]))
        .pipe(rename(function (path) {
            let {dirname, basename, extname} = path;

            blockName = kebabToPascal(dirname);
            path.dirname = blockName;

            basename = basename.replace('.post', '');
            basename = kebabToPascal(basename);
            path.basename = basename;

            blockDir = `${distFolder}/${blockName}`;
            console.log(blockDir);

        }))
        .pipe(gulpFn(() => createJSX(blockName, blockDir)))
        .pipe(replace(/^(\..)/, function (match, p1, offset, string) {
            return p1.toUpperCase();
        }))
        .pipe(replace(/&:elem\(([^)]+)\) {/g, function(match, p1, offset, string) {
            // Replace foobaz with barbaz and log a ton of information
            // See http://mdn.io/string.replace#Specifying_a_function_as_a_parameter
            // console.log('Found ' + match + ' with param ' + p1 + ' at ' + offset + ' inside of ' + string);
            const elemName = kebabToPascal(p1);
            createElem(blockName, blockDir, elemName, 'some');
            return elemName;
        }))
        .pipe(gulp.dest(distFolder));
});

gulp.task('build', () => {
    return bundler('*.bundles/*')
        .pipe(builder({
            // cssdeps: bundle => bundle.src('css', {deps: true})
            //     .pipe(concat(bundle.name + '.css.deps.js')),
            // jsdeps: bundle => bundle.src('js', {deps: true})
            //     .pipe(concat(bundle.name + '.js.deps.js')),
            // bemhtmldeps: bundle => bundle.src('bemhtml', {deps: true})
            //     .pipe(concat(bundle.name + '.bemhtml.deps.js')),
            css: bundle =>
                bundle.src('css')
                    .pipe(gulpOneOf())
                    .pipe(postcss([
                        postcssImport(),
                        postcssEach,
                        postcssFor,
                        postcssSimpleVars(),
                        postcssCalc(),
                        postcssNested,
                        rebemCss,
                        postcssUrl({url: 'rebase'}),
                        autoprefixer(),
                        postcssReporter()
                    ]))
                    .pipe(concat(bundle.name + '.min.css'))
                    .pipe(gulpif(isProd, csso())),
            js: bundle =>
                merge(
                    gulp.src(pathToYm),
                    bundle.src('js').pipe(filter(f => ~['vanilla.js', 'browser.js', 'js'].indexOf(f.tech))),
                    bundle.src('js').pipe(filter(file => file.tech === 'bemhtml.js'))
                        .pipe(concat('browser.bemhtml.js')).pipe(bemhtml({
                        elemJsInstances: true,
                        exportName: 'BEMHTML'
                    }))
                )
                    .pipe(concat(bundle.name + '.min.js'))
                    .pipe(gulpif(isProd, uglify())),
            tmpls: bundle =>
                bundle.src('bemhtml')
                    .pipe(concat('any.bemhtml.js'))
                    .pipe(bemhtml({elemJsInstances: true}))
                    .pipe(concat(bundle.name + '.bemhtml.js')),
            html: bundle => {
                const bemhtmlApply = () => toHtml(bundle.target('tmpls'));
                return gulp.src(bundle.dirname + '/*.bemjson.js')
                    .pipe(bemhtmlApply());
            }
        }))
        .on('error', console.error)
        .pipe(debug())
        .pipe(gulp.dest(file => path.dirname(file.path)));
});

gulp.task('default', gulp.series('build'));
