module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        indent: [
            "error",
            2
        ],
        'linebreak-style': [
            "error",
            "unix"
        ],
        quotes: [
            "error",
            "single"
        ],
        semi: [
            "error",
            "always"
        ],
        'no-case-declarations': 0,
        'react/prop-types': 0,
    }
};