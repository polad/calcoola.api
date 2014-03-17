define([
    "intern!bdd",
    "intern/chai!expect",
    "app/mappers/Calculator"
], function(bdd, expect, CalculatorMapper) {
    with (bdd) {
        describe ('calculator mapper', function () {
            it ('should return calculators by name', function () {
                // Given
                var nameToSearch = "test calculator";
                var matchingCalculators = [{
                    name: "test calculator"
                }, {
                    name: "another test calculator"
                }, {
                    name: "test calculator again"
                }];
                var dbConn = {};
                
                var calculatorMapper = new CalculatorMapper(dbConn);
                
                // When
                var result = calculatorMapper.getByName(nameToSearch).
                    then(function (calculators) {
                        expect(calculators).to.be.an("array");
                        calculators.forEach(function (calculator) {
                            expect(calculator.name).to.contain(nameToSearch);
                        });
                    });
            });
        });
    };
})