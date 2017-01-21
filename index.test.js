import calc from "./index.es.js";
import { plugins, css, styleSheet } from "glamor";
import { renderStatic } from "glamor/server";
import { StyleSheet } from "glamor/lib/sheet";
plugins.add(calc({}));

describe("calc()", () => {
  let sheet;

  test("converts `calc()` to `a`", () => {
    const styles = css({
      border: "calc(1 + 1)px solid pink",
      color: "blue",
      ":hover": { backgroundColor: "red" }
    });
    const res = renderStatic(() => styles);
    expect(
      res.css
    ).toBe(".css-fbi1n4,[data-css-fbi1n4]{border:2px solid pink;color:blue;}.css-fbi1n4:hover,[data-css-fbi1n4]:hover{background-color:red;}");
  });
});
