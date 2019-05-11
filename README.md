# generator-single-components [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/lamartire/generator-single-components.svg)](https://greenkeeper.io/)

>

## Installation

```bash
npm install -g generator-single-components
```

## Usage

This is really easiest way to generate bem blocks.

```bash
yo single-components
```

You can create multiple blocks.

```
Block1 Block2 Block3
```

Basic structure of generated block:

```
blockName/
  ├──blockName.markupExtension
  └──blockName.styleExtension
```

## Supported extensions

At the current time you can generate `react` and `vue` components.

If you want see your favorite component -- open issue or pull request :smile:

## License

MIT © [lamartire]()

[npm-image]: https://badge.fury.io/js/generator-single-components.svg
[npm-url]: https://npmjs.org/package/generator-single-components
[travis-image]: https://travis-ci.org/lamartire/generator-single-components.svg?branch=master
[travis-url]: https://travis-ci.org/lamartire/generator-single-components
[coveralls-image]: https://coveralls.io/repos/lamartire/generator-single-components/badge.svg
[coveralls-url]: https://coveralls.io/r/lamartire/generator-single-components
