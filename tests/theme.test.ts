import test from "ava";
import { render } from "less";

import { platform, platformV3, q806V3 } from "../lib";

interface LessVars {
  [name: string]: string;
}

test("theme platform build", async t => {
  const data = await render("", {
    modifyVars: platform as LessVars,
  });

  t.true(data != undefined, data.css);
});

test("theme platform_v3 build", async t => {
  const data = await render("", {
    modifyVars: platformV3 as LessVars,
  });

  t.true(data != undefined, data.css);
});

test("theme q806_v3 build", async t => {
  const data = await render("", {
    modifyVars: q806V3 as LessVars,
  });

  t.true(data != undefined, data.css);
});
