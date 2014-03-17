define({
    proxyPort: 9000,
    proxyUrl: "http://localhost:9000/",
    capabilities: {
        "selenium-version": "2.37.0"
    },
    environments: [
        { browserName: "chrome", version: "", platform: "Linux" }
    ],
    maxConcurrency: 3,
    useSauceConnect: true,
    webdriver: {
        host: "localhost",
        port: 4444,
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
    },
    loader: {
        baseUrl: process.env.BASE_DIR+"/src/",
        packages: [
            { name: "dojo", location: "dojo" },
            { name: "app", location: "app" }
        ]
    },
    suites: [
        "app/tests/mappers/Calculator"
    ]
});