"use strict";

const path = require("path");
const fs = require("fs");
const less = require("less");

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

async function parseLessAndWriteFile(filename) {
  const output = await less.render(
    themeLessTemplate(path.join(libPath, filename)),
    {
      javascriptEnabled: true,
      compress: true,
      paths: [antdPath, libPath],
    }
  );

  if (output && output.css) {
    const themeDirExistsAlready = await fs.existsSync(exampleThemePath);
    if (!themeDirExistsAlready) {
      fs.mkdirSync(exampleThemePath);
    }

    const cssPath = path.join(exampleThemePath, fmtNameLessToCss(filename));
    fs.writeFileSync(cssPath, output.css);
    fs.writeFileSync(
      path.join(exampleThemePath, fmtNameLessToTs(filename)),
      `export default \`${output.css}\`;`
    );

    console.info(`Generated ${cssPath}`);
  } else {
    console.error(`Parse ${filename} as null`);
  }
}

/**
 * Generate Css Files
 *
 * less -> css
 */
module.exports = async function GenerateCssFiles() {
  const files = fs.readdirSync(libPath);

  if (!files) {
    throw new Error(`No files in '${libPath}'.`);
  }

  const lessFiles = files.filter(isLessFile);

  if (!lessFiles) {
    throw new Error(`No less files in '${libPath}'.`);
  }

  const parsePromise = lessFiles.map(f => parseLessAndWriteFile(f));
  await Promise.all(parsePromise);
};

process.nextTick(() => require.main.exports());
