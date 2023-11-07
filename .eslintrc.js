"use strict"

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
        "plugin:@eslint-community/mysticatea/es2015",
        "plugin:@eslint-community/mysticatea/+eslint-plugin",
    ],
    overrides: [
        {
            files: ["lib/utils.js", "scripts/*.js"],
            rules: {
                "node/no-sync": "off",
            },
        },
        {
            files: [
                "lib/configs.js",
                "lib/processors.js",
                "lib/rules.js",
            ],
            rules: {
                "node/global-require": "off",
            },
        },
    ],
}
