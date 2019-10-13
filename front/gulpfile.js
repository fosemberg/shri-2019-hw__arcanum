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
const gulpFn = require('gulp-fn');
const modifyFile = require('gulp-modify-file');

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
const makeStartWithLowerCase = str => str[0].toLowerCase() + str.slice(1);

const kebabToPascal = string =>
    string
        .split('-')
        .map(makeStartWithUpperCase)
        .join('');

const snakeToPascal = string =>
    string
        .split('_')
        .map(makeStartWithUpperCase)
        .join('');

const toPascal = string => kebabToPascal(snakeToPascal(string));
const toCamelCase = string => makeStartWithLowerCase(toPascal(string));

/**
 * create dir if not exist
 * @param dir - path to dir
 */
const mkdirp = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

/**
 * cut from string peace, that start on @param start and end on @param end
 * @param str - string to find peaces
 * @param start - on what this string should to start
 * @param end - on what this string should to end
 * @returns {{restStr: string, subStr: boolean}|{restStr: string, subStr: string}}
 */
const cutFromString = (str, start, end) => {
    const startPos = str.indexOf(start);
    if (!~startPos) return {subStr: false, restStr: str};
    const endPos = str.indexOf(end, startPos);
    if (!~endPos) return {subStr: false, restStr: str};
    const subStr = str.substring(startPos, endPos + end.length);
    const restStr = str.substr(0, startPos) + str.substring(endPos + end.length);
    return {subStr, restStr};
};

/**
 * cut from string peaces, that start on @param start and end on @param end
 * @param str - string to find peaces
 * @param start - on what this string should to start
 * @param end - on what this string should to end
 * @returns {{restStr: string, subStrs: boolean}|{restStr: string, subStrs: string[]}}
 */
const cutArrayFromString = (str, start, end) => {
    let obj = cutFromString(str, start, end);
    const subStrs = [];

    while (obj.subStr) {
        subStrs.push(obj.subStr);
        obj = cutFromString(obj.restStr, start, end);
    }
    return {
        subStrs: subStrs,
        restStr: obj.restStr
    }
};

const distFolder = 'dist/patterns';
const oneTab = '    ';
let blockName = '';
let blockDir = '';



coverCssWithParent = (parentName, content) => (
    `.${parentName} {
  ${content}
}`
);

const createBlockOrElemIndexTsx = (name, blockName = name) => {
    const jsName = kebabToPascal(name);
    const interfaceName = `I${jsName}`;
    const cnName = `cn${jsName}`;

    return (
        `import {cn} from "@bem-react/classname";

export interface ${interfaceName} {
}

export const ${cnName} = cn('${name}');
`
    )
};

const createBlockOrElemJsx = (name, blockName = name) => {
    const jsName = kebabToPascal(name);
    // const interfaceName = `I${jsName}`;
    const cnName = `cn${jsName}`;

    return (
        `import React from 'react';
import {IClassNameProps} from "@bem-react/core";
import {${cnName}} from "./index";
import './${name}.scss';

const ${jsName}: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={${cnName}({}, [className])}>{children}</div>
);

export default ${jsName};`)
};

const createBlock = (blockName, blockDir) => {
    mkdirp(blockDir);
    fs.writeFileSync(`${blockDir}/${blockName}.tsx`, createBlockOrElemJsx(blockName));
    fs.writeFileSync(`${blockDir}/index.tsx`, createBlockOrElemIndexTsx(blockName));
};

const createElem = (parentName, parentDir, content) => {
    const match = content.match(/&:elem\(([^)]+)\)/);
    if (!match) return;
    const name = kebabToPascal(match[1]);
    const _content = content.replace(/&:elem\(([^)]+)\)/, `&-${name}`);
    const elemDir = `${parentDir}/-${name}`;
    const fullElemName = `${parentName}-${name}`;

    mkdirp(elemDir);

    fs.writeFileSync(`${elemDir}/${fullElemName}.tsx`, createBlockOrElemJsx(fullElemName));
    fs.writeFileSync(`${elemDir}/index.tsx`, createBlockOrElemIndexTsx(fullElemName));

    // find mods inside
    let obj = cutArrayFromString(_content, '&:mod\(', `\n${oneTab}${oneTab}}`);
    obj.subStrs.forEach(subStr => createMod(fullElemName, elemDir, subStr));

    fs.writeFileSync(`${elemDir}/${fullElemName}.scss`, coverCssWithParent(parentName, obj.restStr));
};

const createModJsx = (parentName, modName, modValue, fileName) => {
    const jsName = toPascal(fileName);
    const interfaceName = `I${toPascal(parentName)}`;
    return(
        `import { withBemMod } from '@bem-react/core';
import {${interfaceName}} from "../index";
import './${fileName}.scss';

export const ${jsName} = withBemMod<${interfaceName}>('${parentName}', { ${modName}: '${modValue}'});`
    )
}

const createMod = (parentName, parentDir, content) => {
    const match = content.match(/&:mod\(([^)]+)\)/);
    if (!match) return;
    const nameValue = match[1];
    const [modNameForFile, modValue] = nameValue.split(' ');
    const modNameForContent = toCamelCase(modNameForFile);
    const modFullNameForFile = `${modNameForFile}${modValue ? `_${modValue}` : ''}`;

    const _content = content.replace(/&:mod\(([^)]+)\)/, `&_${modNameForContent}`);

    const fileName = `${parentName}_${modFullNameForFile}`;
    const modDir = `${parentDir}/_${modNameForFile}`;

    mkdirp(modDir);
    fs.writeFileSync(`${modDir}/${fileName}.tsx`, createModJsx(parentName, modNameForContent, modValue, fileName));
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
        }))
        .pipe(gulpFn(() => createBlock(blockName, blockDir)))
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
