var chalk = require('chalk');
var runner = require('./runner');

var success = chalk.green;
var error = chalk.red;
var warn = chalk.yellow;
var noColor = function (text) { return text; };

function printTest(test, color) {
    color = color || noColor;
    console.log("|-");
    var pad = "       ";
    var status = (pad + test.status).slice(-pad.length)
    console.log("| "+color(status)+": "+test.name);
    if (test.message) {
        console.log("| "+pad+": "+color(test.message));
    }
};

function buildPrint(color) {
    return function(test) {
        printTest(test, color);
    };
};

var printSkip = buildPrint(warn);
var printPass = buildPrint(success);
var printFail = buildPrint(error);

function printTotals(numTotal, numPassed, numFailed) {
    var numSkipped = numTotal-numPassed-numFailed;
    console.log("========================================================");
    console.log("Tests Run: "+numTotal+" | "+
                success("Passed: "+numPassed)+" | "+
                error("Failed: "+numFailed)+" | "+
                warn("Skipped: "+numSkipped));
};

function run(calculators, cb) {
  runner.run(calculators, function(results) {
    console.log("Running Tests...");
    var numTotal = calculators.length;
    var numPassed = 0;
    var numFailed = 0;

    results.forEach(function(test) {
      if (test.status == "PASSED") {
        numPassed++;
        printPass(test);
        return;
      } else if (test.status == "FAILED") {
        numFailed++;
        printFail(test);
        return;
      }
      printSkip(test);
    });
    printTotals(numTotal, numPassed, numFailed);
    return results;
  });
};

exports.run = run;
