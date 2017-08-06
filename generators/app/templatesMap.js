module.exports = {
  componentTypes: {
    'Single file component (Vue)': 'single',
    'Complex component (includes template, styles and etc. files)': 'complex'
  },
  markup: {
    'React component class': 'react.jsx',
    'React pure component class (requires react >=15.3)': 'react-pure.jsx',
    'React functional component': 'react-function.jsx',
    'Vue (html template)': 'vue-html.vue',
    'Vue (pug template)': 'vue-pug.vue'
  },
  styles: {
    css: 'style.css',
    Stylus: 'style.styl',
    Sass: 'style.sass',
    Scss: 'style.scss',
    'css sugarss (*.sss)': 'style.sss',
    Less: 'style.less'
  }
};
