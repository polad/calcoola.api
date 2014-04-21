define([
    "intern!bdd",
    "intern/chai!should",
    "app/tests/Mockery",
    "dojo/Deferred",
    "app/mappers/Calculator",
    "app/mappers/QueryRunner"
], function(bdd, should, Mockery, Deferred, CalculatorMapper, QueryRunner) {
    should();
    with (bdd) {
        describe ("CalculatorMapper", function () {
            
            var table, db, row, r, queryRunner,
            calculatorMapper, deferredFromQueryRunner,
            mockery = null,
            nameToSearch = "test calculator",
            matchingCalculators = [{
                name: "test calculator"
            }, {
                name: "another test calculator"
            }, {
                name: "test calculator again"
            }];
            
            beforeEach(function() {
                mockery = Mockery.sandbox.create();

                // Given
                deferredFromQueryRunner = new Deferred();
                
                row = { match: function(pattern) {} };
                
                r = { row: function(property) { return row; } };
                
                table = {
                    filter: function(filter) { return table; },
                    orderBy: function(key) { return table; },
                    limit: function(n) { return table; }
                };
                
                db = { table: function(tableName) { return table; } };
                mockery.mock(db).
                    expects("table").
                    once().
                    withExactArgs("calculators").
                    returns(table);
                
                queryRunner = new QueryRunner();
                mockery.mock(queryRunner).
                    expects("run").
                    once().
                    withExactArgs(sinon.match.func).
                    callsArgWith(0, db, r).
                    returns(deferredFromQueryRunner);
                
                calculatorMapper = new CalculatorMapper({
                    queryRunner: queryRunner
                });
            });
            
            afterEach(function() {
                mockery.verifyAndRestore();
            });
            
            it ("Should return calculators matched by name", function () {
                var dfd = this.async(3000);
                
                // Given
                mockery.mock(row).
                    expects("match").
                    once().
                    withExactArgs("(?i)"+nameToSearch);
                
                mockery.mock(r).
                    expects("row").
                    once().
                    withExactArgs("name").
                    returns(row);
                
                mockery.mock(table).
                    expects("filter").
                    once().
                    returns(table);
                
                // When
                calculatorMapper.getByName(nameToSearch).
                    then(dfd.callback(function (calculators) {
                        calculators.forEach(function (calculator) {
                            calculator.name.should.contain(nameToSearch);
                        });
                    }), dfd.reject.bind(dfd));
                deferredFromQueryRunner.resolve(matchingCalculators);
                
                // Then
                mockery.verifyAndRestore();
                
                return dfd;
            });
            
            it ("Should return calculators ordered by name", function() {
                // Given
                mockery.mock(table).
                    expects("orderBy").
                    once().
                    withExactArgs("name").
                    returns(table);
                
                // When
                calculatorMapper.getByName(nameToSearch);
                
                // Then
                mockery.verifyAndRestore();
            });
            
            it ("Should return maximum 100 calculators per search results", function() {
                // Given
                mockery.mock(table).
                    expects("limit").
                    withExactArgs(100).
                    returns(table);
                
                // When
                calculatorMapper.getByName(nameToSearch);
                
                // Then
                mockery.verifyAndRestore();
            });
        });
    };
});