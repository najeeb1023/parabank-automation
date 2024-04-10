module.exports = {

    default: {
        compilerOptions: {
            esModuleInterop: true,
            resolveJsonModule: true
        },
        formatOptions: {
            snippetInterface: "async-await"
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
            "html:test-result/reports/cucumber-report.html"
        ]
    }

}