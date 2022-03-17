module.exports = {
  root: true,
  parserOptions:{
    sourceType:'module'
  },
  parser:"vue-eslint-parser",
  extends: ['plugin:vue/vue}-essential', 'plugin:vue/vue3-strongly-recommended',],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "no-console": "off",
    "comma-dangle": [12,'never']//禁止使用拖尼逗号
  }
}