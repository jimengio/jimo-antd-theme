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

const argvsMap = ["compress", "type"];

/**
 * Generate Css Files
 *
 * less -> css
 *
 * argv:
 *   `compress`: less compress
 *   `type`: generated css or ts
 */
module.exports = async function GenerateCssFiles() {
  const argvs = process.argv.slice(2);
  const type = argvs && argvs.includes(argvsMap[1]);
  const compress = (argvs && argvs.includes(argvsMap[0])) || type;

  const files = fs.readdirSync(libPath);

  if (!files) {
    throw new Error(`No files in '${libPath}'.`);
  }

  const lessFiles = files.filter(isLessFile);

  if (!lessFiles) {
    throw new Error(`No less files in '${libPath}'.`);
  }

  const themeDirExistsAlready = await fs.existsSync(exampleThemePath);
  if (!themeDirExistsAlready) {
    fs.mkdirSync(exampleThemePath);
    console.info(`No example folder. Generated ${exampleThemePath}`);
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
      const cssPath = path.join(exampleThemePath, fmtNameLessToCss(filename));
      fs.writeFileSync(cssPath, css);
      console.info(`Generated ${cssPath}`);
    }
  });
};

process.nextTick(() => require.main.exports());
