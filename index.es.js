import calcFn from "reduce-css-calc";
const CONTAINS_CALC = /\bcalc\([\s\S]*?\)/;
export default function calc({ precision }) {
  return ({ selector, style }) => {
    Object.entries(style).map(([ key, val ]) => {
      if (CONTAINS_CALC.test(val)) {
        style[key] = calcFn(val, precision);
      }
    });
    return { selector, style };
  };
}
