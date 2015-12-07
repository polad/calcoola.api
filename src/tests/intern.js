define({
    proxyPort: 9000,
    proxyUrl: "http://localhost:9000/",
    maxConcurrency: 3,
    useSauceConnect: false,
    excludeInstrumentation: /^(?:dojo|sinon)\//,
    reporters: [ "console" ],
    loader: {
        baseUrl: "src/",
        packages: [
            { name: "intern", location: "../node_modules/intern" },
            { name: "dojo", location: "dojo" },
            { name: "app", location: "app" },
            { name: "sinon", location: "../node_modules/sinon/lib" },
            {
                name: "chai-things",
                location: "../node_modules/chai-things/lib",
                main: "chai-things"
            },
            {
                name: "chai-as-promised",
                location: "../node_modules/chai-as-promised/lib",
                main: "chai-as-promised"
            }
        ],
        map: {
            intern: {
                dojo: "intern/node_modules/dojo",
                chai: "app/tests/chai"
            },
            "*": {
                "intern/dojo": "intern/node_modules/dojo",
                "intern-chai": "intern/node_modules/chai/chai"
            }
        }
    },
    suites: [
        "app/tests/controllers/Calculator",
        "app/tests/mappers/Calculator",
        "app/tests/mappers/QueryRunner"
    ]
});
