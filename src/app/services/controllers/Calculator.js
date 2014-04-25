define([
    "app/services/mappers/Calculator",
    "app/controllers/Calculator"
], function(calculatorMapper, CalculatorController) {
    return new CalculatorController({ calculatorMapper: calculatorMapper });
});