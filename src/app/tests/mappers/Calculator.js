define([
    "intern!bdd",
    "app/tests/Mockery",
    "dojo/Deferred",
    "app/mappers/Calculator",
    "app/mappers/QueryRunner"
], function(bdd, Mockery, Deferred, CalculatorMapper, QueryRunner) {
    with (bdd) {
        describe ("CalculatorMapper", function () {
            
            var mockery = null;
            
            beforeEach(function() {
                mockery = Mockery.sandbox.create();
            });
            
            afterEach(function() {
                mockery.verifyAndRestore();
            });
            
            it ("Should return calculators by name", function () {
                // Given
                var nameToSearch = "test calculators";
                var matchingCalculators = [{
                    name: "test calculator"
                }, {
                    name: "another test calculator"
                }, {
                    name: "test calculator again"
                }];

                var deferred = new Deferred();
                
                var table = { filter: function(filter) {} };
                mockery.mock(table).expects("filter").once();
                
                var db = { table: function(tableName) {} };
                mockery.mock(db).
                    expects("table").
                    once().
                    withExactArgs("calculators").
                    returns(table);
                
                var row = { match: function(pattern) {} };
                mockery.mock(row).
                    expects("match").
                    once().
                    withExactArgs("(?i)"+nameToSearch);
                
                var r = { row: function(property) {} };
                mockery.mock(r).
                    expects("row").
                    once().
                    withExactArgs("name").
                    returns(row);
                
                var queryRunner = new QueryRunner();
                mockery.mock(queryRunner).
                    expects("run").
                    once().
                    withExactArgs(sinon.match.func).
                    callsArgWith(0, db, r).
                    returns(deferred);
                
                var calculatorMapper = new CalculatorMapper({ queryRunner: queryRunner });
                
                // When
                calculatorMapper.getByName(nameToSearch).
                    then(function (calculators) {
                        calculators.forEach(function (calculator) {
                            calculator.name.should.contain(nameToSearch);
                        });
                    });
                deferred.resolve(matchingCalculators);
                
                // Then
                mockery.verifyAndRestore();
            });
        });
    };
})