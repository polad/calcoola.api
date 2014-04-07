define({
    maxConcurrency: 3,
    useSauceConnect: false,
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