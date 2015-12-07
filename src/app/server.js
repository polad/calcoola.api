var express = require('express');
var config = require('./config');

var app = express();

app.use('/', require('./routes/index'));
app.use('/calculators', require('./routes/calculators'));

app.listen(config.appListenPort, 'localhost');
