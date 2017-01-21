# glamor-calc-reduction

A port of
[postcss-calc](https://github.com/postcss/postcss-calc)
for glamor, using
[reduce-css-calc](https://github.com/MoOx/reduce-css-calc).

Transform glamor declarations with `calc()`:

```javascript
css({
  border: "calc(1 + 1)px solid pink",
  color: "blue",
  ":hover": { backgroundColor: "red" }
});
```

into

```css
.css-fbi1n4,[data-css-fbi1n4]{
  border:2px solid pink;
  color:blue;
}
.css-fbi1n4:hover,[data-css-fbi1n4]:hover{
  background-color:red;
}
```

# Usage

```javascript
import calc from 'glamor-calc-reduction';
import { plugins } from 'glamor';
plugins.add(calc());
```

## ECMAScript

You will need polyfills for the following features (which are provided
for you if you are using babel's runtime).

* Object.entries

A non-compiled version can be required at `index.es.js` and is
specified as `jsnext:main`. This version includes the following
language features in addition:

* Destructuring
* Object literal shorthand
* Fat Arrows
