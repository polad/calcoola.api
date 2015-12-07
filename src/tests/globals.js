'use strict';
var path = require('path');

var rootDir = path.join(__dirname, '../..');
var appDir = path.join(rootDir, 'src/app');
var testDir = path.join(rootDir, 'src/app');

global.expect = require('chai').expect;
global.sinon = require('sinon');

global.APP_DIR = appDir;
global.BIN_DIR = path.join(rootDir, 'bin');
global.MAPPERS_DIR = path.join(appDir, 'mappers');
global.ROUTES_DIR = path.join(appDir, 'routes');
