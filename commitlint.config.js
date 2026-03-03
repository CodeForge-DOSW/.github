module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'header-max-length': [2, 'always', 72],
  },
};
