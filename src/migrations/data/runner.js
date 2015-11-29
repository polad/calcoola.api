function buildFormulaFor(calculator) {
    return eval('(function(args){return '+calculator.formula+';})');
};

function isEmpty(value) {
  return value === null || value === NaN || value === undefined;
};

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

function testCalculator(calculator) {
    var result = {
        name: calculator.name,
        message: "",
        status: "SKIPPED"
    };
    var test = calculator.test;
    if (test && test.args && !isEmpty(test.result)) {
        var actualResult = buildFormulaFor(calculator)(test.args);
        actualResult = round(actualResult, !isEmpty(calculator.decimals) ? calculator.decimals : 2);
        if (test.result == actualResult) {
            result.status = "PASSED";
        } else {
            result.status = "FAILED";
            result.message = "Expected result ("+test.result+") actual was ("+actualResult+")";
        }
    }
    return result;
};

function run(calculators, cb) {
  cb(calculators.map(testCalculator));
};

exports.run = run;
