require([
    "dojo/node!express",
    "app/Loader",
    "app/config"
], function(express, AppLoader, config) {
    var app = express();
    
    var loader = new AppLoader({ app: app });
    
    app.listen(config.appListenPort);
    console.log("Listening on port " + config.appListenPort);
});