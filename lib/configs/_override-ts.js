"use strict"

const { Linter } = require("eslint")
const semver = require("semver")

const isESLint71OrHigher = semver.gte(Linter.version, "7.1.0")

module.exports = {
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: require.resolve("@typescript-eslint/parser"),
            parserOptions: {
                loggerFn: false,
                project: "tsconfig.json",
            },
            rules: {
                // Enabled rules
                "@typescript-eslint/adjacent-overload-signatures":
                    "error",
                "@typescript-eslint/array-type": "error",
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/ban-ts-comment": "error",
                "@typescript-eslint/ban-tslint-comment": "error",
                "@typescript-eslint/class-literal-property-style":
                    "error",
                "@typescript-eslint/consistent-generic-constructors":
                    "error",
                "@typescript-eslint/consistent-indexed-object-style":
                    "error",
                "@typescript-eslint/consistent-type-assertions":
                    "error",
                "@typescript-eslint/consistent-type-exports":
                    "error",
                "@typescript-eslint/consistent-type-imports":
                    "error",
                "@typescript-eslint/default-param-last": "error",
                "@typescript-eslint/dot-notation": "error",
                "@typescript-eslint/explicit-member-accessibility":
                    "error",
                "@typescript-eslint/explicit-module-boundary-types":
                    "error",
                "@typescript-eslint/init-declarations": "error",
                "@typescript-eslint/lines-between-class-members":
                    "error",
                "@typescript-eslint/method-signature-style":
                    "error",
                "@typescript-eslint/naming-convention": "error",
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-base-to-string": "error",
                "@typescript-eslint/no-confusing-non-null-assertion":
                    "error",
                "@typescript-eslint/no-confusing-void-expression":
                    "error",
                "@typescript-eslint/no-dupe-class-members":
                    "error",
                "@typescript-eslint/no-duplicate-enum-values":
                    "error",
                "@typescript-eslint/no-duplicate-type-constituents":
                    "off", // TODO: enable fully in the next major version
                "@typescript-eslint/no-dynamic-delete": "error",
                "@typescript-eslint/no-empty-interface": "error",
                "@typescript-eslint/no-extra-non-null-assertion":
                    "error",
                "@typescript-eslint/no-extraneous-class": "error",
                "@typescript-eslint/no-floating-promises": "error",
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-implied-eval": "error",
                "@typescript-eslint/no-import-type-side-effects":
                    "off", // TODO: enable fully in the next major version
                "@typescript-eslint/no-inferrable-types": "error",
                "@typescript-eslint/no-invalid-this": "error",
                "@typescript-eslint/no-invalid-void-type": "error",
                ...(isESLint71OrHigher
                    ? {
                          "@typescript-eslint/no-loss-of-precision":
                              "error",
                      }
                    : {
                          "@typescript-eslint/no-loss-of-precision":
                              "off",
                      }), // TODO: enable fully once we drop v7 support
                "@typescript-eslint/no-loop-func": "error",
                "@typescript-eslint/no-meaningless-void-operator":
                    "error",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-misused-promises": "error",
                "@typescript-eslint/no-mixed-enums": "off", // TODO: enable fully in the next major version
                "@typescript-eslint/no-non-null-asserted-nullish-coalescing":
                    "error",
                "@typescript-eslint/no-non-null-asserted-optional-chain":
                    "error",
                "@typescript-eslint/no-redundant-type-constituents":
                    "error",
                "@typescript-eslint/no-redeclare": "error",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-restricted-imports":
                    "error",
                "@typescript-eslint/no-shadow": "error",
                "@typescript-eslint/no-this-alias": [
                    "error",
                    { allowDestructuring: true },
                ],
                "@typescript-eslint/no-throw-literal": "error",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare":
                    "error",
                "@typescript-eslint/no-unnecessary-qualifier":
                    "error",
                "@typescript-eslint/no-unnecessary-type-arguments":
                    "error",
                "@typescript-eslint/no-unnecessary-type-assertion":
                    "error",
                "@typescript-eslint/no-unnecessary-type-constraint":
                    "error",
                "@typescript-eslint/no-unsafe-argument": "error",
                "@typescript-eslint/no-unsafe-assignment": "error",
                "@typescript-eslint/no-unsafe-call": "error",
                "@typescript-eslint/no-unsafe-declaration-merging":
                    "off", // TODO: enable fully in the next major version
                "@typescript-eslint/no-unsafe-enum-comparison":
                    "off", // TODO: enable fully in the next major version
                "@typescript-eslint/no-unsafe-member-access":
                    "error",
                "@typescript-eslint/no-unsafe-return": "error",
                "@typescript-eslint/no-unused-expressions":
                    "error",
                "@typescript-eslint/no-useless-empty-export":
                    "error",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/non-nullable-type-assertion-style":
                    "error",
                "@typescript-eslint/padding-line-between-statements":
                    "error",
                "@typescript-eslint/parameter-properties": "error",
                "@typescript-eslint/prefer-as-const": "error",
                "@typescript-eslint/prefer-enum-initializers":
                    "error",
                // https://github.com/typescript-eslint/typescript-eslint/issues/454
                "@typescript-eslint/prefer-function-type": "off",
                "@typescript-eslint/prefer-includes": "error",
                "@typescript-eslint/prefer-literal-enum-member":
                    "error",
                "@typescript-eslint/prefer-namespace-keyword":
                    "error",
                "@typescript-eslint/prefer-nullish-coalescing":
                    "error",
                "@typescript-eslint/prefer-optional-chain":
                    "error",
                "@typescript-eslint/prefer-readonly-parameter-types":
                    "error",
                // https://github.com/typescript-eslint/typescript-eslint/issues/946
                "@typescript-eslint/prefer-readonly": "off",
                "@typescript-eslint/prefer-reduce-type-parameter":
                    "off",
                "@typescript-eslint/prefer-regexp-exec": "error",
                "@typescript-eslint/prefer-return-this-type":
                    "off",
                "@typescript-eslint/prefer-string-starts-ends-with":
                    "error",
                "@typescript-eslint/prefer-ts-expect-error": "off",
                "@typescript-eslint/restrict-plus-operands":
                    "error",
                "@typescript-eslint/require-array-sort-compare":
                    "error",
                "@typescript-eslint/restrict-template-expressions":
                    "error",
                "@typescript-eslint/return-await": "error",
                "@typescript-eslint/sort-type-constituents":
                    "error",
                "@typescript-eslint/switch-exhaustiveness-check":
                    "error",
                "@typescript-eslint/triple-slash-reference":
                    "error",
                // I get a lot of false positives...
                "@typescript-eslint/unbound-method": [
                    "off",
                    { ignoreStatic: true },
                ],
                // https://github.com/typescript-eslint/typescript-eslint/issues/452
                "@typescript-eslint/unified-signatures": "off",
                // Replacements
                "no-empty-function": "off",
                "@typescript-eslint/no-empty-function": "error",
                "no-useless-constructor": "off",
                "@typescript-eslint/no-useless-constructor":
                    "error",
                "require-await": "off",
                "@typescript-eslint/require-await": "error",

                // Disabled rules
                "func-style": "off",
                "init-declarations": "off",
                "lines-between-class-members": "off",
                "no-dupe-class-members": "off",
                "no-invalid-this": "off",
                "no-loop-func": "off",
                "no-redeclare": "off",
                "no-undef": "off",
                "no-unused-vars": "off",
                "no-use-before-define": "off",
                "one-var": "off",
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/block-spacing": "off", // favor of Prettier.
                "@typescript-eslint/brace-style": "off", // favor of Prettier.
                "@typescript-eslint/comma-dangle": "off", // favor of Prettier.
                "@typescript-eslint/comma-spacing": "off", // favor of Prettier.
                "@typescript-eslint/consistent-type-definitions":
                    "off",
                "@typescript-eslint/explicit-function-return-type":
                    "off", // I want but this is not so...
                "@typescript-eslint/func-call-spacing": "off", // favor of Prettier.
                "@typescript-eslint/indent": "off", // favor of Prettier.
                "@typescript-eslint/lines-around-comment": "off", // favor of Prettier.
                "@typescript-eslint/key-spacing": "off", // favor of Prettier.
                "@typescript-eslint/keyword-spacing": "off", // favor of Prettier.
                "@typescript-eslint/member-delimiter-style": "off", // favor of Prettier.
                "@typescript-eslint/member-ordering": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-extra-parens": "off", // favor of Prettier.
                "@typescript-eslint/no-extra-semi": "off", // favor of Prettier.
                "@typescript-eslint/no-magic-numbers": "off",
                "@typescript-eslint/no-namespace": "off", // I like the namespace for interfaces (type only things).
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-type-alias": "off",
                "@typescript-eslint/no-unnecessary-condition":
                    "off", // This was problematic for test code.
                "@typescript-eslint/no-unused-vars": "off", // tsc verifies it.
                "@typescript-eslint/no-use-before-define": "off", // tsc verifies it.
                "@typescript-eslint/object-curly-spacing": "off", // favor of Prettier.
                "@typescript-eslint/prefer-for-of": "off",
                "@typescript-eslint/promise-function-async": "off",
                "@typescript-eslint/quotes": "off", // favor of Prettier.
                "@typescript-eslint/semi": "off", // favor of Prettier.
                "@typescript-eslint/space-before-blocks": "off", // favor of Prettier.
                "@typescript-eslint/space-before-function-paren":
                    "off", // favor of Prettier.
                "@typescript-eslint/space-infix-ops": "off", // favor of Prettier.
                "@typescript-eslint/strict-boolean-expressions":
                    "off",
                "@typescript-eslint/type-annotation-spacing":
                    "off", // favor of Prettier.
                "@typescript-eslint/typedef": "off",
            },
        },
        {
            files: ["*.d.ts"],
            rules: {
                strict: "off",
            },
        },
    ],
}
