import test from "ava";
import { render } from "less";

import { platform, q806 } from "../lib";

interface LessVars {
  [name: string]: string;
}

test("theme platform build", async t => {
  const data = await render("", {
    modifyVars: platform as LessVars,
  });

  t.true(data != undefined, data.css);
});

test("theme q806 build", async t => {
  const data = await render("", {
    modifyVars: q806 as LessVars,
  });

  t.true(data != undefined, data.css);
});
