define([
    'intern!bdd',
    'intern/chai!expect',
    'app/controllers/Calculator'
], function (bdd, expect, calculatorController) {
    with (bdd) {
        describe('calculator controller', function () {
            it('should return calculators', function () {
                // Given
                var req = {
                    query: {
                        name: "test calculator"
                    }
                };
                var res = {
                    send: function(statusCode, data) {
                        expect(data).to.be.an(array);
                        data.forEach(function (item) {
                            expect(item.name).to.contain(req.query.name);
                        });
                    }
                };
                var matchingCalculators = [{
                    name: "test calculator"
                }, {
                    name: "another test calculator"
                }, {
                    name: "test calculator again"
                }];
                
                var calculatorMapper = {
                    getByName: function(name) {
                        return matchingCalculators;
                    }
                };
                
                var calculatorController = new CalculatorController(calculatorMapper);
                
                // When
                calculatorController.getByName(req, res);
            });
        });
    };
});