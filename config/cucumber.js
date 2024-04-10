const { DEFAULT_THEME } = require("@cucumber/pretty-formatter");

module.exports = {

    default: {
        compilerOptions: {
            esModuleInterop: true,
            resolveJsonModule: true
        },
        formatOptions: {
            snippetInterface: "async-await",
            theme: {
                DEFAULT_THEME,
                'step text': 'red',
            }
        },
        paths: [
            "src/test/features/"
            
        ],
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/test/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "cucumber-console-formatter",
            "html:test-result/reports/cucumber-report.html",
            "json:test-result/reports/cucumber-report.json",
            "@cucumber/pretty-formatter"
            
        ],
    }
}