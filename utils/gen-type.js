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

const user_agents = [
  "Mozilla/5.0 (Windows; U; Windows NT 5.1; it; rv:1.8.1.11) Gecko/20071127 Firefox/2.0.0.11",
  "Opera/9.25 (Windows NT 5.1; U; en)",
  "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
  "Mozilla/5.0 (compatible; Konqueror/3.5; Linux) KHTML/3.5.5 (like Gecko) (Kubuntu)",
  "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.12",
  "Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9",
  "Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.7 (KHTML, like Gecko) Ubuntu/11.04 Chromium/16.0.912.77 Chrome/16.0.912.77 Safari/535.7",
  "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/603.3.8 (KHTML, like Gecko)",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15 (KHTML, like Gecko)",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
];

const getUrlCtx = (url) => {
  const urlObj = new URL(url);

  const options = {
    headers: {
      "User-Agent": user_agents[Math.ceil(Math.random() * 10)],
    },
  };

  return new Promise((resolve, reject) =>
    https
      .get(urlObj, options, (res) => {
        let html = "";
        res.on("data", (data) => {
          html += data;
        });
        res.on("end", () => {
          resolve(html);
        });
      })
      .on("error", (err) => {
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

  rl.on("line", (line) => {
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

const argvsMap = ["local"];

/**
 * Generate variables type
 *
 * argv:
 *   `local`: generated from local files
 */
module.exports = async function GenerateAntdThemeVariablesType() {
  const argvs = process.argv.slice(2);
  const local = argvs && argvs.includes(argvsMap[0]);

  try {
    /**
     * 根据本地文件生成
     *
     * 根据 `antdThemePathV3`/`antdThemePath`/`antdDarkThemePath` 链接地址，手动复制
     * 分别添加到当前目录 `content_v3`/`content`/`content_dark` 文件中
     */
    if (local) {
      ["content_v3", "content", "content_dark"].map((name) => {
        const filePath = path.join(__dirname, name);

        fs.readFile(filePath, "utf8", (err, data) => {
          if (!err) {
            switch (name) {
              case "content_v3":
                writeTypeFile(data, variablesFilePath_v3, typeName_v3);
                break;
              case "content":
                writeTypeFile(data, variablesFilePath, typeName);
                break;
              case "content_dark":
                writeTypeFile(data, variablesFilePath_dark, typeName_dark);
                break;
            }
          }
        });
      });
    } else {
      const content_v3 = await getUrlCtx(antdThemePathV3);
      writeTypeFile(content_v3, variablesFilePath_v3, typeName_v3);

      const content = await getUrlCtx(antdThemePath);
      writeTypeFile(content, variablesFilePath, typeName);

      const darkContent = await getUrlCtx(antdDarkThemePath);
      writeTypeFile(darkContent, variablesFilePath_dark, typeName_dark);
    }
  } catch (err) {
    console.error("Generate variables types error.", err);
  }
};

process.nextTick(() => require.main.exports());
