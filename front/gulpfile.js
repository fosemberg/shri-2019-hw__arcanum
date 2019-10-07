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
const gulpFn  = require('gulp-fn');
const modifyFile  = require('gulp-modify-file');

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

const mkdirp = (dir) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
};

const cutFromString = (str, start, end) => {
    const startPos = str.indexOf(start);
    if (!~startPos) return {subStr: false, restStr: str};
    const endPos = str.indexOf(end, startPos);
    if (!~endPos) return {subStr: false, restStr: str};
    const subStr = str.substring(startPos, endPos + end.length);
    const restStr = str.substr(0, startPos) + str.substring(endPos + end.length);
    return {subStr,restStr};
};

const cutArrayFromString = (str, start, end) => {
    let obj = cutFromString(str, start, end);
    const subStrs = [];

    while(obj.subStr) {
        subStrs.push(obj.subStr);
        obj = cutFromString(obj.restStr, start, end);
    }
    return {
        subStrs: subStrs,
        restStr: obj.restStr
    }
};

const distFolder = 'dist/components';
const oneTab = '    ';
let blockName = '';
let blockDir = '';


const createJsx = name => (
`import React from 'react';
import './${name}.scss';

const ${kebabToPascal(name)} = (props) => (
  <div className="${name}">{props.children}</div>
);

export default ${kebabToPascal(name)};`
);

coverCssWithParent = (parentName, content) => (
`.${parentName} {
  ${content}
}`
);

const createJsxBlock = (blockName, blockDir) => {
    mkdirp(blockDir);
    fs.writeFileSync(`${blockDir}/${blockName}.js`, createJsx(blockName));
};

const createElem = (parentName, parentDir, content) => {
    const match = content.match(/&:elem\(([^)]+)\)/);
    if (!match) return;
    const name = kebabToPascal(match[1]);
    const _content = content.replace(/&:elem\(([^)]+)\)/, `&.${name}`);
    const elemDir = `${parentDir}/-${name}`;
    const fullElemName = `${parentName}-${name}`;

    mkdirp(elemDir);

    // find mods inside
    let obj = cutArrayFromString(_content, '&:mod\(', `\n${oneTab}${oneTab}}`);
    obj.subStrs.forEach(subStr => createMod(fullElemName, elemDir, subStr));

    fs.writeFileSync(`${elemDir}/${fullElemName}.js`, createJsx(fullElemName));
    fs.writeFileSync(`${elemDir}/${fullElemName}.scss`, coverCssWithParent(parentName, obj.restStr));
};

const createMod = (parentName, parentDir, content) => {
    const match = content.match(/&:mod\(([^)]+)\)/);
    if (!match) return;
    const nameValue = match[1];
    const [modName, modValue] = nameValue.split(' ');
    const modFullName = `${modName}${modValue ? `_${modValue}`: ''}`;

    const _content = content.replace(/&:mod\(([^)]+)\)/, `&.${modFullName}`);

    const fileName = `${parentName}_${modFullName}`;
    const modDir = `${parentDir}/_${modName}`;

    mkdirp(modDir);
    fs.writeFileSync(`${modDir}/${fileName}.js`, createJsx(fileName));
    fs.writeFileSync(`${modDir}/${fileName}.scss`, coverCssWithParent(parentName, _content));
};

mkdirp('dist');
mkdirp(distFolder);
gulp.task('convert_to_react', function () {
    return gulp.src('./common.blocks/**/*.scss')
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
        .pipe(gulpFn(() => createJsxBlock(blockName, blockDir)))
        .pipe(modifyFile((content, path, file) => {
            let obj = cutArrayFromString(content, '&:elem\(', `\n${oneTab}}`);
            obj.subStrs.forEach(subStr => createElem(blockName, blockDir, subStr));

            obj = cutArrayFromString(obj.restStr, '&:mod\(', `\n${oneTab}}`);
            obj.subStrs.forEach(subStr => createMod(blockName, blockDir, subStr));

            const _content = obj.restStr.replace(/^:block\(([^)]+)\)/, `.${blockName}`);

            return _content;
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
