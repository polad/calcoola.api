var chalk = require("chalk");

var success = chalk.green;
var error = chalk.red;
var warn = chalk.yellow;
var noColor = function (text) { return text; };

var printTest = function (test, color) {
    color = color || noColor;
    console.log("|-");
    var pad = "       ";
    var status = (pad + test.status).slice(-pad.length)
    console.log("| "+color(status)+": "+test.name);
    if (test.message) {
        console.log("| "+pad+": "+color(test.message));
    }
};

var buildPrint = function(color) {
    return function(test) {
        printTest(test, color);
    };
};

var printSkip = buildPrint(warn);
var printPass = buildPrint(success);
var printFail = buildPrint(error);

var printTotals = function (numTotal, numPassed, numFailed) {
    var numSkipped = numTotal-numPassed-numFailed;
    console.log("========================================================");
    console.log("Tests Run: "+numTotal+" | "+
                success("Passed: "+numPassed)+" | "+
                error("Failed: "+numFailed)+" | "+
                warn("Skipped: "+numSkipped));
};

var buildFormulaFor = function (calculator) {
    return eval('(function(args){return '+calculator.formula+';})');
};

var round = function (value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

var testCalculator = function (calculator) {
    var result = {
        name: calculator.name,
        message: "",
        status: "SKIPPED"
    };
    var test = calculator.test;
    if (test && test.args && test.result != undefined) {
        var actualResult = buildFormulaFor(calculator)(test.args);
        actualResult = round(actualResult, calculator.decimals || 2);
        if (test.result == actualResult) {
            result.status = "PASSED";
        } else {
            result.status = "FAILED";
            result.message = "Expected result ("+test.result+") actual was ("+actualResult+")";
        }
    }
    return result;
};

exports.run = function (calculators) {
    console.log("Running Tests...");
    var numTotal = calculators.length;
    var numPassed = numFailed = 0;
    var results = calculators.map(testCalculator);
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
};
