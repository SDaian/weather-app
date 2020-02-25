module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": ["error", {"singleQuote": true}],
        "react/jsx-filename-extension": "off",
        "no-console": "error",
        "no-debugger": "error",
        "no-unused-vars": "warn",
        "quotes": ["error", "single", { "allowTemplateLiterals": true }]
    }
};