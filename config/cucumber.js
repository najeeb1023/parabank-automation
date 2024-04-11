const { DEFAULT_THEME } = require("@cucumber/pretty-formatter");
const { ThemeItem } = require("@cucumber/pretty-formatter/lib/src/theme");

module.exports = {

    default: {
        compilerOptions: {
            esModuleInterop: true,
            resolveJsonModule: true
        },
        formatOptions: {
            snippetInterface: "async-await",
            colorsEnabled: true,
            // makeTheme: {
            //     'step text': 'red',
            //     'feature name': 'pink'
            // },
            
        },
        paths: [
            "src/test/features/"
            
        ],
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/test/hooks/hooks.ts",
            "support-color"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:test-result/reports/cucumber-report.html",
            "json:test-result/reports/cucumber-report.json",
            "@cucumber/pretty-formatter",
            // "cucumber-console-formatter",
            
        ],
    }
}