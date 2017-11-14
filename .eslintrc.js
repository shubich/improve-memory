module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "jest": true,
    },
    "rules": {
        "jsx-a11y/anchor-is-valid": [ "error", {}],
        "jsx-a11y/label-has-for": [ 2, {
            "allowChildren": true,
        }],
        "react/jsx-filename-extension": [0],
        "react/prop-types": [0],
        "no-plusplus": [0],
        "no-param-reassign": [0]
    }
};