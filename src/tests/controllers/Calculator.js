define([
    "intern!bdd",
    "app/tests/Mockery",
    "dojo/Deferred",
    "app/controllers/Calculator",
    "app/mappers/Calculator"
], function (bdd, Mockery, Deferred, CalculatorController, CalculatorMapper) {
    with (bdd) {
        describe('CalculatorController', function () {
            
            var mockery = null;
            
            beforeEach(function() {
                mockery = Mockery.sandbox.create();
            });
            
            afterEach(function() {
                mockery.verifyAndRestore();
            });
            
            it('Should send calculators as a response', function () {
                // Given
                var matchingCalculators = [{
                    name: "test calculator"
                }, {
                    name: "another test calculator"
                }, {
                    name: "test calculator again"
                }];
                
                var req = {
                    query: {
                        name: "test calculators"
                    }
                };
                
                var res = {
                    send: function(statusCode, data) {},
                    setHeader: function() {},
                    end: function() {}
                };
                var resMock = mockery.mock(res);
                resMock.expects("send").
                    once().
                    withExactArgs(200, matchingCalculators);
                resMock.expects("end").once();
                
                var deferred = new Deferred();
                
                var calculatorMapper = new CalculatorMapper();
                mockery.mock(calculatorMapper).
                    expects("getByName").
                    once().
                    withExactArgs(req.query.name).
                    returns(deferred);
                
                var calculatorController = new CalculatorController({ calculatorMapper: calculatorMapper });
                
                // When
                calculatorController.getByName(req, res);
                deferred.resolve(matchingCalculators);
                
                // Then
                mockery.verifyAndRestore();
            });
        });
    };
});