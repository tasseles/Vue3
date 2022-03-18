// module.exports = {
//   root: true,
//   parserOptions:{
//     sourceType:'module'
//   },
//   parser:"vue-eslint-parser",
//   extends: ['plugin:vue/vue}-essential', 'plugin:vue/vue3-strongly-recommended',],
//   env: {
//     browser: true,
//     node: true,
//     es6: true
//   },
//   rules: {
//     "no-console": "off",
//     "comma-dangle": [12,'never'],//禁止使用拖尼逗号
//     'indent': 0,
//     'space-before-function-paren': 0
//   }
// }
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 0,
    'space-before-function-paren': 0
  }
}
