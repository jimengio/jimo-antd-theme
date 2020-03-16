# jimo-antd-theme

Antd theme for jimengio

[![Build Status](https://travis-ci.org/jimengio/jimo-antd-theme.svg?branch=master)](https://travis-ci.org/jimengio/jimo-antd-theme)
[![npm](https://img.shields.io/npm/v/@jimengio/jimo-antd-theme.svg)](https://www.npmjs.com/package/@jimengio/jimo-antd-theme)
[![GitHub license](https://img.shields.io/github/license/jimengio/jimo-antd-theme)](./LICENSE)

## Theme

Preview: https://jimengio.github.io/jimo-antd-theme/

[Antd variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

1. platform
2. q806
3. ...

## Usage

### Installation

```shell
yarn add -D @jimengio/jimo-antd-theme
```

### less

```tsx
import "antd/dist/antd.less";
import "@jimengio/jimo-antd-theme/platform.theme.less";
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

## Dev

```
# install dependencies
yarn

# example
yarn example

# build package
yarn build
```

## License

[MIT](./LICENSE)
