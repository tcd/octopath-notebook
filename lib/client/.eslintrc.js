module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
    ],
    ignorePatterns: [
        "./config/**.js",
    ],
    rules: {
        "semi": ["warn", "never"],
        "indent": ["warn", 4],
        "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "comma-dangle": ["warn", "always-multiline"],
        "object-curly-spacing": ["warn", "always"],
        "prefer-const": ["warn", {
            "destructuring": "any",
        }],
        // "linebreak-style": ["error", "unix"],
        // "no-inline-comments": "off",
        // "no-console": "off",
        "react/react-in-jsx-scope": "off", // we've taken care of this with webpack
        "@typescript-eslint/no-var-requires": "off",
    },
}
