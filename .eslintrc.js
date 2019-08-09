module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-redux"
    ],
        "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-redux/recommended"
    ],
    "rules": {
        "indent": [
        "error", 2
        ],
        "react-redux/connect-prefer-named-arguments": 2,
        "react-redux/connect-prefer-named-arguments": 2,
        "react-redux/mapDispatchToProps-returns-object": 2,
        "react-redux/mapDispatchToProps-prefer-parameters-names": 2,
        "react-redux/mapStateToProps-no-store": 2,
        "react-redux/mapStateToProps-prefer-parameters-names": 2,
        "react-redux/no-unused-prop-types": 2,
        "react-redux/prefer-separate-component-file": 2
    }
};