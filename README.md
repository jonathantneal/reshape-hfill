# Reshape hfill [<img src="https://jonathantneal.github.io/reshape-md/logo.svg" alt="Reshape" width="90" height="90" align="right">][Reshape]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Gitter Chat][git-img]][git-url]

[Reshape hfill] lets you easily use contextual headings in HTML, like the
[proposed `<h>` element].

```html
<!-- before -->
<h>Heading</h>
<p>...</p>
<section>
  <h>Heading</h>
  <p>...</p>
  <section>
    <h>X Heading</h>
    <p>...</p>
  </section>
</section>
<section>
  <p>...</p>
  <h>Heading</h>
  <p>...</p>
</section>

<!-- after -->
<h role="heading" aria-level="1">Heading</h>
<p>...</p>
<section>
  <h role="heading" aria-level="2">Heading</h>
  <p>...</p>
  <section>
    <h role="heading" aria-level="3">X Heading</h>
    <p>...</p>
  </section>
</section>
<section>
  <p>...</p>
  <h role="heading" aria-level="2">Heading</h>
  <p>...</p>
</section>

<!-- or, alternatively -->
<h1>Heading</h1>
<p>...</p>
<section>
  <h2>Heading</h2>
  <p>...</p>
  <section>
    <h3>X Heading</h3>
    <p>...</p>
  </section>
</section>
<section>
  <p>...</p>
  <h2>Heading</h2>
  <p>...</p>
</section>
```

## Usage

Add [Reshape] and [Reshape hfill] to your build tool:

```bash
npm install reshape reshape-hfill --save-dev
```

Use [Reshape hfill] as a plugin:

```js
import reshape from 'reshape';
import reshapeHfill from 'reshape-hfill';

reshape({
  plugins: [
    reshapeHfill(/* options */)
  ]
}).process(YOUR_HTML);
```

## Options

### headings

Type: `Object`  
Default: `{ "h": [ "h", "h1", "h2", "h3", "h4", "h5", "h6" ] }`

A list of heading tags that should be created from the array of tags,
alternatively transforming them into their calculated hierarchical level by a
numerical range.

**Example**: Only transform `<h>` tags:

```json
{
  "headings": {
    "h": [
      "h"
    ]
  }
}
```

**Example**: Transform many tags into their calculated hierarchical level (1-6):

```json
{
  "headings": {
    "1-6": [ "h", "h1", "h2", "h3", "h4", "h5", "h6" ]
  }
}
```

### sections

Type: `Array`  
Default: `[ "article", "aside", "nav", "section" ]`

A list of sectioning content tags used to calculate the hierarchical level of
heading tags.

**Example**: Only increase the hierarchical level on `<article>`, `<aside>`,
and `<section>` tags:

```json
{
  "sections": [ "article", "aside", "section" ]
}
```

[npm-url]: https://www.npmjs.com/package/reshape-hfill
[npm-img]: https://img.shields.io/npm/v/reshape-hfill.svg
[cli-url]: https://travis-ci.org/jonathantneal/reshape-hfill
[cli-img]: https://img.shields.io/travis/jonathantneal/reshape-hfill.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/reshape-hfill.svg
[git-url]: https://gitter.im/reshape/reshape
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[Reshape hfill]: https://github.com/jonathantneal/reshape-hfill
[Reshape]: https://github.com/reshape/reshape
[proposed `<h>` element]: https://jonathantneal.github.io/h-element-spec/
