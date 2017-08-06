'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const shortid = require('shortid');
const random = require('lodash/random');
const templatesMap = require('./../generators/app/templatesMap');
const fs = require('fs');

let blocksNames = ['BlockName'];

for (let i = 1; i < 5; i++) {
  blocksNames.push(shortid.generate());
}

describe('generator-single-components: React component class', () => {
  const prompts = {
    blocksNames: blocksNames[0],
    markup: 'react.jsx',
    style: 'style.css'
  };

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts);
  });

  it('creates files', () => {
    const expectedMarkup = fs.readFileSync(
      path.resolve(__dirname, `./fixtures/markup/${prompts.markup}`),
      'utf-8'
    );
    const expectedStyles = fs.readFileSync(
      path.resolve(__dirname, `./fixtures/styles/${prompts.style}`),
      'utf-8'
    );

    assert.file([
      `${blocksNames[0]}/${blocksNames[0]}.jsx`,
      `${blocksNames[0]}/${blocksNames[0]}.css`
    ]);
    assert.fileContent(
      `${blocksNames[0]}/${blocksNames[0]}.jsx`,
      expectedMarkup
    );
    assert.fileContent(
      `${blocksNames[0]}/${blocksNames[0]}.css`,
      expectedStyles
    );
  });
});

describe('generator-single-components: React pure component class (requires react >=15.3)', () => {
  const prompts = {
    blocksNames: blocksNames[0],
    markup: 'react-pure.jsx',
    style: 'style.css'
  };

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts);
  });

  it('creates files', () => {
    const expectedMarkup = fs.readFileSync(
      path.resolve(__dirname, `./fixtures/markup/${prompts.markup}`),
      'utf-8'
    );
    const expectedStyles = fs.readFileSync(
      path.resolve(__dirname, `./fixtures/styles/${prompts.style}`),
      'utf-8'
    );

    assert.file([
      `${blocksNames[0]}/${blocksNames[0]}.jsx`,
      `${blocksNames[0]}/${blocksNames[0]}.css`
    ]);
    assert.fileContent(
      `${blocksNames[0]}/${blocksNames[0]}.jsx`,
      expectedMarkup
    );
    assert.fileContent(
      `${blocksNames[0]}/${blocksNames[0]}.css`,
      expectedStyles
    );
  });
});

describe('generator-single-components: React functional component', () => {
  const prompts = {
    blocksNames: blocksNames[0],
    markup: 'react-function.jsx',
    style: 'style.css'
  };

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts);
  });

  it('creates files', () => {
    const expectedMarkup = fs.readFileSync(
      path.resolve(__dirname, `./fixtures/markup/${prompts.markup}`),
      'utf-8'
    );
    const expectedStyles = fs.readFileSync(
      path.resolve(__dirname, `./fixtures/styles/${prompts.style}`),
      'utf-8'
    );

    assert.file([
      `${blocksNames[0]}/${blocksNames[0]}.jsx`,
      `${blocksNames[0]}/${blocksNames[0]}.css`
    ]);
    assert.fileContent(
      `${blocksNames[0]}/${blocksNames[0]}.jsx`,
      expectedMarkup
    );
    assert.fileContent(
      `${blocksNames[0]}/${blocksNames[0]}.css`,
      expectedStyles
    );
  });
});

describe('generator-single-components: Multiple components generation', () => {
  const prompts = {
    blocksNames: blocksNames.join(' '),
    markup: 'react.jsx',
    style: 'style.css'
  };

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts);
  });

  it('creates files', () => {
    let expectedComponents = []

    blocksNames.map(blockName => {
      expectedComponents = expectedComponents.concat([
        `${blockName}/${blockName}.jsx`,
        `${blockName}/${blockName}.css`
      ]);
    });

    assert.file(expectedComponents);
  });
});

describe('generator-single-components:vue-html', () => {
  const prompts = {
    blocksNames: blocksNames[0],
    markup: 'vue-html.vue',
    style: 'style.css'
  };

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts);
  });

  it('creates files', () => {
    const expectedMarkup = fs.readFileSync(
      path.resolve(__dirname, `./fixtures/markup/vue-html.single.vue`),
      'utf-8'
    );

    assert.file([
      `${blocksNames[0]}.vue`
    ]);
    assert.fileContent(
      `${blocksNames[0]}.vue`,
      expectedMarkup
    );
  });
});

describe('generator-single-components:vue-pug', () => {
  const prompts = {
    blocksNames: blocksNames[0],
    markup: 'vue-pug.vue',
    style: 'style.css'
  };

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts);
  });

  it('creates files', () => {
    const expectedMarkup = fs.readFileSync(
      path.resolve(__dirname, `./fixtures/markup/vue-pug.single.vue`),
      'utf-8'
    );

    assert.file([
      `${blocksNames[0]}.vue`
    ]);
    assert.fileContent(
      `${blocksNames[0]}.vue`,
      expectedMarkup
    );
  });
});

describe('generator-single-components:vue complex component', () => {
  const prompts = {
    blocksNames: blocksNames[0],
    markup: 'vue-html.vue',
    style: 'style.css',
    type: 'complex'
  };

  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts);
  });

  it('creates files', () => {
    assert.file([
      `${blocksNames[0]}/${blocksNames[0]}.vue`,
      `${blocksNames[0]}/${blocksNames[0]}.js`,
      `${blocksNames[0]}/${blocksNames[0]}.css`
    ]);
  });
});
