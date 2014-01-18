var express = require('express');
var app = express();
var controllers = require('./controllers');

controllers.configureRoutes(app);

app.listen(3000);
console.log('Listening on port 3000');
