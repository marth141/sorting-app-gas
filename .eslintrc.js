module.exports = {
  extends: "google",
  parserOptions: {
    ecmaVersion: 5
  },
  env: {
    node: true
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "max-len": ["error", { code: 100 }],
    camelcase: "off", // Off for destructuring
    "async-await/space-after-async": 2,
    "async-await/space-after-await": 2,
    "guard-for-in": "off",
    "no-var": "off", // ES3
    "no-unused-vars": "off", // functions aren't used.
    "object-curly-spacing": ["off", "always"],
    "linebreak-style": ["error", "unix"],
    "one-var": ["off"],
    "quote-props": [1, "always"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "prettier/prettier": "error",
    "quotes": ["error", "double"]
  },
  plugins: ["async-await", "prettier"]
};
