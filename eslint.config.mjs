import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@stylistic/jsx-closing-bracket-location': [1, 'after-props'],
    'vue/html-closing-bracket-newline': [
      1,
      {
        singleline: 'never',
        multiline: 'never',
        selfClosingTag: {
          singleline: 'never',
          multiline: 'never',
        },
      },
    ],
  },
})
