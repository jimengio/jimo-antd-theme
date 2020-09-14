# jimo-antd-theme

Antd theme for jimengio

[![Build Status](https://travis-ci.org/jimengio/jimo-antd-theme.svg?branch=master)](https://travis-ci.org/jimengio/jimo-antd-theme)
[![npm](https://img.shields.io/npm/v/@jimengio/jimo-antd-theme.svg)](https://www.npmjs.com/package/@jimengio/jimo-antd-theme)
[![GitHub license](https://img.shields.io/github/license/jimengio/jimo-antd-theme)](./LICENSE)

## Theme

Preview: https://jimengio.github.io/jimo-antd-theme/

[Antd variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

1. platform / platformV3
2. q806V3 / q806HCV3
3. ...

### css

```shell
lib
├── platform.min.css
├── platform_v3.min.css
├── platform_hc.min.css
├── platform_hc_v3.min.css
├── q806_hc_v3.min.css
├── q806_v3.min.css
```

### less

```shell
lib
├── platform.theme.less
├── platform_v3.theme.less
├── platform_hc.theme.less
├── platform_hc_v3.theme.less
├── q806_v3.theme.less
├── q806_hc_v3.theme.less
```

## Usage

### Installation

```shell
yarn add -D @jimengio/jimo-antd-theme
```

### less

```tsx
import "antd/dist/antd.less";
import "@jimengio/jimo-antd-theme/lib/platform.theme.less";
```

### webpack

```tsx
// Entry file

// import "antd/dist/antd.css";
import "antd/dist/antd.less";
```

```js
const jimoTheme = require("@jimengio/jimo-antd-theme");

// add rule
exports.matchLessRule = {
  test: /\.less$/,
  use: [
    {
      loader: "style-loader",
    },
    {
      loader: "css-loader",
    },
    {
      loader: "less-loader",
      options: {
        modifyVars: {
          ...jimoTheme.platform,
        },
        javascriptEnabled: true,
      },
    },
  ],
};
```

### css

不是很推荐，根据具体 `antd` 版本打包，会有兼容性问题

```tsx
// import "antd/dist/antd.min.css";
import "@jimengio/jimo-antd-theme/lib/platform.min.css";
```

## Dev

```
# install dependencies
yarn

# example
yarn example

# build package
yarn build

# sync less type (src)
yarn gen-type

# generate less files (lib)
yarn gen-less

# generate css files (example/lib)
yarn gen-css [compress, type, build]

# generate css file (for example)
yarn gen-css
# generate compressed css file (for example)
yarn gen-css compress
# generate typescript css string file (for example)
yarn gen-css type
# generate compressed css file (for lib)
yarn gen-css build

```

## License

[MIT](./LICENSE)
