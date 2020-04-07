"use strict";

const path = require("path");
const fs = require("fs");
const less = require("less");
const { mapAsync } = require("./fmt");

const libPath = path.join(__dirname, "../lib");
const examplePath = path.join(__dirname, "../example");
const exampleThemePath = path.join(examplePath, "theme");
const antdPath = path.join(__dirname, "../node_modules/antd");
const antdLessPath = path.join(antdPath, "dist/antd.less");

function themeLessTemplate(filePath) {
  return `
@import "${antdLessPath}";
@import "${filePath}";
`;
}

function isLessFile(filename) {
  return /.less$/.test(filename);
}

function fmtNameLessToCss(lessName) {
  return lessName.replace(/.theme.less$/, ".css");
}

function fmtNameLessToMinCss(lessName) {
  return lessName.replace(/.theme.less$/, ".min.css");
}

function fmtNameLessToTs(lessName) {
  return lessName.replace(/.theme.less$/, ".ts");
}

async function parseAntdLessToCss(filename, compress) {
  const output = await less.render(
    themeLessTemplate(path.join(libPath, filename)),
    {
      javascriptEnabled: true,
      compress: compress || false,
      paths: [antdPath, libPath],
    }
  );

  return output && output.css;
}

const argvsMap = ["compress", "type", "build"];

/**
 * [TODO] Generate Css Files
 *
 * less -> css
 *
 * argv:
 *   `compress`: less compress
 *   `type`: generated css or ts
 *   `build`: generated min css in lib
 */
module.exports = async function GenerateCssFiles() {
  const argvs = process.argv.slice(2);
  const type = argvs && argvs.includes(argvsMap[1]);
  const build = argvs && argvs.includes(argvsMap[2]);
  const compress = (argvs && argvs.includes(argvsMap[0])) || type || build;

  const files = fs.readdirSync(libPath);

  if (!files) {
    throw new Error(`No files in '${libPath}'.`);
  }

  const lessFiles = files.filter(isLessFile);

  if (!lessFiles) {
    throw new Error(`No less files in '${libPath}'.`);
  }

  const outputPath = build ? libPath : exampleThemePath;

  const themeDirExistsAlready = await fs.existsSync(outputPath);
  if (!themeDirExistsAlready) {
    fs.mkdirSync(outputPath);
    console.info(`No folder. Generated ${outputPath}`);
  }

  mapAsync(lessFiles, async filename => {
    const css = await parseAntdLessToCss(filename, compress);
    if (!css) {
      console.error(`Parse ${filename} as null.`, output);
      return;
    }

    if (type) {
      const tsPath = path.join(exampleThemePath, fmtNameLessToTs(filename));
      fs.writeFileSync(tsPath, `export default \`${css}\`;`);
      console.info(`Generated ${tsPath}`);
    } else {
      const cssFilename = build
        ? fmtNameLessToMinCss(filename)
        : fmtNameLessToCss(filename);

      const cssPath = path.join(outputPath, cssFilename);
      fs.writeFileSync(cssPath, css);
      console.info(`Generated ${cssPath}`);
    }
  });
};

process.nextTick(() => require.main.exports());
