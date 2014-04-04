define({
    proxyPort: 9009,
    proxyUrl: "http://localhost:9009/",
    capabilities: {
        "selenium-version": "2.37.0"
    },
    environments: [
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
            { name: "app", location: "app" },
            { name: "sinon", location: "../node_modules/sinon/lib" }
        ]
    },
    suites: [
        "app/tests/controllers/Calculator",
        "app/tests/mappers/Calculator"
    ]
});