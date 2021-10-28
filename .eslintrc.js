module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: [2],
    quotes: [1, "double"],
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-unused-vars": "error",
  },
};
