import test from "ava";

import {
  isLessVariables,
  isLineComment,
  getInLineComment,
  getLessVariableName,
} from "../utils/fmt";

const conformLessLines = [
  {
    line: "@list-footer-background: transparent;",
    variable: "@list-footer-background",
  },

  {
    line: "@icon-color: inherit;",
    variable: "@icon-color",
  },

  {
    line:
      "@primary-10: color(~`colorPalette('@{primary-color}', 10) `); // unused",
    variable: "@primary-10",
  },

  {
    line: "@black: #000;",
    variable: "@black",
  },
];

const errLessLines = ["", "@icon-", "@icon--icon", "abc"];

const conformCommentLines = [
  "// -------- Colors -----------",
  "// Comment",
  "// ---",
];

const errCommentLines = [" // Comment", "/ ", "abd//demo", "", "/ /"];

const commentInLines = [
  {
    line:
      "@background-color-base: hsv(0, 0, 96%); // Default grey background color",
    comment: "// Default grey background color",
  },
  {
    line: "@border-style-base: solid; // style of a components border",
    comment: "// style of a components border",
  },
  {
    line:
      "@primary-2: color(~`colorPalette('@{primary-color}', 2) `); // replace tint(@primary-color, 80%)",
    comment: "// replace tint(@primary-color, 80%)",
  },
];

test("isLessVariables", t => {
  conformLessLines.map(r => {
    t.true(isLessVariables(r.line), r.line);
  });

  errLessLines.map(line => {
    t.false(isLessVariables(line), line);
  });
});

test("isLineComment", t => {
  conformCommentLines.map(line => {
    t.true(isLineComment(line), line);
  });

  errCommentLines.map(line => {
    t.false(isLineComment(line), line);
  });
});

test("getInLineComment", t => {
  commentInLines.map(r => {
    t.is(getInLineComment(r.line), r.comment);
  });
});

test("getLessVariableName", t => {
  conformLessLines.map(r => {
    t.is(getLessVariableName(r.line), r.variable);
  });

  errLessLines.map(line => {
    t.is(getLessVariableName(line), null);
  });
});
