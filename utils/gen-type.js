"use strict";

const path = require("path");
const https = require("https");
const fs = require("fs");
const readline = require("readline");
const Readable = require("stream").Readable;
const {
  isLessVariables,
  isLineComment,
  getInLineComment,
  getLessVariableName,
} = require("./fmt");

const antdThemePath =
  "https://raw.githubusercontent.com/ant-design/ant-design/master/components/style/themes/default.less";
const variablesFilename = "variables.ts";
const typesPath = path.join(__dirname, "../src/types");
const variablesFilePath = path.join(typesPath, variablesFilename);
const typeName = "AntdThemeVariables";

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
      const comment = getInLineComment(line);
      const suffix = comment ? `  ${comment}` : "";
      typesText += `  "${getLessVariableName(line)}"?: string;${suffix}\n`;
      typesTot++;
    } else if (isLineComment(line)) {
      typesText += `  ${line}\n`;
    }
  });

  rl.on("close", () => {
    typesText += `}`;

    fs.writeFileSync(variablesFilePath, typesText);
    console.info(`Generated ${typesTot} variables in ${variablesFilePath}.`);
  });
}

/**
 * Generate variables type
 */
module.exports = async function GenerateAntdThemeVariablesType() {
  const content = await getUrlCtx(antdThemePath);

  writeTypeFile(content);
};

process.nextTick(() => require.main.exports());
