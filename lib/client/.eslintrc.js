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
        "semi": ["error", "never"],
        "indent": ["warn", 4],
        "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "comma-dangle": ["error", "always-multiline"],
        "object-curly-spacing": ["error", "always"],
        "prefer-const": ["warn", {
            "destructuring": "any",
        }],
        // "linebreak-style": ["error", "unix"],
        // "no-inline-comments": "off",
        // "no-console": "off",
        "react/react-in-jsx-scope": "off", // we've taken care of this with webpack
        "t@typescript-eslint/no-var-requires": "off",
    },
}
/**
 *
 * Configuring Rules:
 *     "off" or 0 - turn the rule off
 *    "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
 *   "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 *
 */
