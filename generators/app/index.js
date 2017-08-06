'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');
const templatesMap = require('./templatesMap');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Welcome to the doozie ' + chalk.red('generator-single-components') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'blocksPath',
        message: 'Specify the path to the directory where the blocks will be created:',
        default: '.'
      }, {
        type: 'input',
        name: 'blocksNames',
        message: 'Enter blocks names (separated by spaces):',
        default: 'block'
      }, {
        type: 'list',
        name: 'markup',
        message: 'Choose markup file extension:',
        choices: Object.keys(templatesMap.markup).map(key => (
          templatesMap.markup[key]
        )),
        default: 'react.jsx'
      }, {
        type: 'list',
        name: 'type',
        message: 'Select generation type:',
        choices: Object.keys(templatesMap.componentTypes).map(key => (
          templatesMap.componentTypes[key]
        )),
        default: 'single',
        when: function (res) {
          return res.markup.includes('vue');
        }
      }, {
        type: 'list',
        name: 'style',
        message: 'Choose style file extension:',
        choices: Object.keys(templatesMap.styles).map(key => (
          templatesMap.styles[key]
        )),
        default: 'css'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const {blocksPath, blocksNames, markup, type, style} = this.props;
    const markupExtension = markup.match(/\.\S+$/gm)[0];
    const stylesExtension = style.match(/\.\S+$/gm)[0];

    /* eslint-disable */
    blocksNames.split(' ').map(blockName => {
      try {
        fs.readdirSync(blocksPath);
      } catch (err) {
        if (err.code === 'ENOENT') {
          fs.mkdirSync(blocksPath);
        }
      }

      if (type && type === 'single') {
        const singleFileExtension = markup.slice(
          0, markup.indexOf(markupExtension)
        ) + '.single' + markupExtension

        this.fs.copyTpl(
          this.templatePath(`markup/${singleFileExtension}`),
          this.destinationPath(`${blocksPath}/${blockName}${markupExtension}`),
          {
            blockName,
            style: stylesExtension.slice(1)
          }
        );
      } else if (type && type === 'complex') {
        this.fs.copyTpl(
          this.templatePath('other/vue-component-script.js'),
          this.destinationPath(`${blocksPath}/${blockName}/${blockName}.js`),
          {
            blockName
          }
        );
        [markupExtension, stylesExtension].map(ext => {
          return this.fs.copyTpl(
            this.templatePath(
              ext === markupExtension ? `markup/${markup}` : `styles/${style}`
            ),
            this.destinationPath(`${blocksPath}/${blockName}/${blockName}${ext}`),
            {
              blockName
            }
          );
        });
      } else {
        [markupExtension, stylesExtension].map(ext => {
          return this.fs.copyTpl(
            this.templatePath(
              ext === markupExtension ? `markup/${markup}` : `styles/${style}`
            ),
            this.destinationPath(`${blocksPath}/${blockName}/${blockName}${ext}`),
            {
              blockName
            }
          );
        });
      }
    });
    /* eslint-enable */
  }
};
