require([
    "dojo/node!express",
    "app/controllers/Loader",
    "app/config"
], function(express, ControllersLoader, config) {
    var app = express();
    
    var loader = new ControllersLoader({ app: app });
    
    app.listen(config.appListenPort);
    console.log('Listening on port 3000');
});