module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "react-app",
        "airbnb",
        "plugin:jsx-a11y/recommended",
    ],
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
    "plugins": ["jsx-a11y", "react-hooks"],
    "rules": {
        // Allow single Named-export
        "import/prefer-default-export": "off",
        // Set react-hooks lint as error
        "react-hooks/rules-of-hooks": "error"
    }
};
