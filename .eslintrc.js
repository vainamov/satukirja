module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/essential",
        "@vue/airbnb",
        "@vue/typescript",
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

        "import/first": "off",
        indent: ["error", 4],
        "max-len": "off",
        "no-plusplus": "off",
        quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],

    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
};
