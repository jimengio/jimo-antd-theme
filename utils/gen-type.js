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

// antd v3.26.13
const antdThemePathV3 =
  "https://raw.githubusercontent.com/ant-design/ant-design/3.26.13/components/style/themes/default.less";

// antd latest v4.x
const antdThemePath =
  "https://raw.githubusercontent.com/ant-design/ant-design/master/components/style/themes/default.less";
const antdDarkThemePath =
  "https://raw.githubusercontent.com/ant-design/ant-design/master/components/style/themes/dark.less";

const variablesFilename_v3 = "variables_v3.ts";
const variablesFilename = "variables.ts";
const variablesFilename_dark = "variables_dark.ts";
const typesPath = path.join(__dirname, "../src/types");
const variablesFilePath_v3 = path.join(typesPath, variablesFilename_v3);
const variablesFilePath = path.join(typesPath, variablesFilename);
const variablesFilePath_dark = path.join(typesPath, variablesFilename_dark);
const typeName_v3 = "AntdThemeVariablesV3";
const typeName = "AntdThemeVariables";
const typeName_dark = "AntdDarkThemeVariables";

const getUrlCtx = url => {
  const options = new URL(url);

  return new Promise((resolve, reject) =>
    https
      .get(options, res => {
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
};

function writeTypeFile(content, filePath, typeName) {
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

    fs.writeFileSync(filePath, typesText);
    console.info(`Generated ${typesTot} variables in ${filePath}.`);
  });
}

/**
 * Generate variables type
 */
module.exports = async function GenerateAntdThemeVariablesType() {
  try {
    const content_v3 = await getUrlCtx(antdThemePathV3);
    writeTypeFile(content_v3, variablesFilePath_v3, typeName_v3);

    const content = await getUrlCtx(antdThemePath);
    writeTypeFile(content, variablesFilePath, typeName);

    const darkContent = await getUrlCtx(antdDarkThemePath);
    writeTypeFile(darkContent, variablesFilePath_dark, typeName_dark);
  } catch (err) {
    console.error("Generate variables types error.", err);
  }
};

process.nextTick(() => require.main.exports());
