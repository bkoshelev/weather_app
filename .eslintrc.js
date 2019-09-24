module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react",
    "prettier",
    "prettier/react",
    "plugin:compat/recommended",
    "plugin:unicorn/recommended",
    "plugin:jsx-a11y/recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:import/typescript"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: ["react", "babel", "react-hooks", 'prettier', 'import', "unicorn", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "unicorn/filename-case": 0,
    'no-console': 1,
    //"no-use-before-define": 0,
    "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.test.js", "**/*.spec.js", "**/*.stories.js"] }],
    "react/display-name": 0,
    "unicorn/prevent-abbreviations": 0,
    "no-magic-numbers": ["error", { "enforceConst": true, detectObjects: true }],
    "no-warning-comments": ["error"],
    "max-len": ["warn", { "code": 80 }],
    "react/prop-types": [0, { ignore: ['children'], }],
    "react/require-default-props": ['error', { forbidDefaultForRequired: false }],
    "import/no-unresolved": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "warn"
  },
  "settings": {
    "react": {
      "version": "16.8.4",
      "ignoreTranspilerName": true
    },
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ],
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};