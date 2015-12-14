var express = require('express');
var config = require('./config');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/index'));
app.use('/calculators', require('./routes/calculators'));
app.use('/tester', require('./routes/tester'));

app.listen(config.appListenPort, 'localhost');
