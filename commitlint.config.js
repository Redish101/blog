module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    'type-enum': [2, 'always', [
      'upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert'
     ]],
    'type-case': [2],
    'type-empty': [2],
    'scope-empty': [2],
    'scope-case': [2],
    'subject-full-stop': [2, 'never'],
    'subject-case': [2, 'never'],
    'header-max-length': [2, 'always', 72]
  }
};
