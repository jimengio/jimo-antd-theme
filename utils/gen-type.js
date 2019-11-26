"use strict";

const path = require("path");
const https = require("https");
const fs = require("fs");
const readline = require("readline");
const Readable = require("stream").Readable;

const antdThemePath =
  "https://raw.githubusercontent.com/ant-design/ant-design/master/components/style/themes/default.less";
const antdDefaultThemeFilename = "antd.default.less";
const variablesFilename = "variables.ts";
const staticPath = path.join(__dirname, "../static");
const antdDefaultThemeFilePath = path.join(
  staticPath,
  antdDefaultThemeFilename
);
const typesPath = path.join(__dirname, "../src/types");
const variablesFilePath = path.join(typesPath, variablesFilename);
const typeName = "AntdThemeVariables";

const lessVariableReg = /^@(\w+\-?\w+)+\:/;

const getUrlCtx = url =>
  new Promise((resolve, reject) =>
    https
      .get(url, res => {
        let html = "";
        res.on("data", data => {
          html += data;
        });
        res.on("end", () => {
          resolve(html);
        });
      })
      .on("error", err => {
        reject(err);
      })
  );

/**
 * Sync antd theme `default.less`
 * and
 * Generate variables type
 */
module.exports = async function GenerateAntdThemeVariablesType() {
  const content = await getUrlCtx(antdThemePath);
  fs.writeFileSync(antdDefaultThemeFilePath, content);
  console.info(
    `Sync antd default theme(less).\nGenerated ${antdDefaultThemeFilePath}.`
  );

  writeTypeFile(content);
};

function writeTypeFile(content) {
  const stream = new Readable();
  stream.push(content);
  stream.push(null);

  const rl = readline.createInterface({
    input: stream,
  });

  let typesTot = 0;
  let typesText = `export default interface ${typeName} {\n`;

  rl.on("line", line => {
    if (isLessVariables(line)) {
      typesText += `  "${getStyleName(line)}"?: string;\n`;
      typesTot++;
    }
  });

  rl.on("close", () => {
    typesText += `}`;

    fs.writeFileSync(variablesFilePath, typesText);
    console.info(`Generated ${typesTot} variables in ${variablesFilePath}.`);
  });
}

function isLessVariables(str) {
  return lessVariableReg.test(str);
}

function getStyleName(strLine) {
  return strLine.match(lessVariableReg)[0].slice(0, -1);
}

process.nextTick(() => require.main.exports());
