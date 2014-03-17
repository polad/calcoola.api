var loadModule = "app/server";

dojoConfig = {
    baseUrl: "src/",
    async: 1,
    hasCache: {
        "host-node": 1,
        "dom": 0
    },
    packages: [{
        name: "dojo",
        location: "dojo"
    }, {
        name: "app",
        location: "app"
    }],
    deps: [ loadModule ]
};

require("./src/dojo/dojo.js");