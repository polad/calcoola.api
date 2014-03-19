define({
    maxConcurrency: 3,
    useSauceConnect: false,
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