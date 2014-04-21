define([
    "intern!bdd",
    "intern/chai!should",
    "app/tests/Mockery",
    "app/mappers/QueryRunner"
], function(bdd, should, Mockery, QueryRunner) {
    should();
    with (bdd) {
        describe ("QueryRunner", function() {
            
            var mockery = null;
            
            beforeEach(function() {
                mockery = Mockery.sandbox.create();
            });
            
            afterEach(function() {
                mockery.verifyAndRestore();
            });
            
            describe ("When run a query callback", function() {
                // Given
                var rethinkdb, rMock, r_db, queryCallback, queryCallbackResult,
                queryCallbackResultMock, successCallback, errCallback, queryRunner,
                dbConnection = {
                    host: "localhost",
                    port: 28015,
                    database: "test"
                };
                
                beforeEach(function() {
                    rethinkdb = {
                        connect: function() {},
                        db: function() {}
                    };
                    rMock = mockery.mock(rethinkdb);
                    rMock.expects("connect").
                        once().
                        callsArg(1);
                    r_db = {};
                    rMock.expects("db").
                        once().
                        withExactArgs(dbConnection.database).
                        returns(r_db);
                    queryCallbackResult = { run: function() {} };
                    queryCallbackResultMock = mockery.mock(queryCallbackResult);
                    queryCallback = mockery.stub().returns(queryCallbackResult);
                    successCallback = mockery.spy();
                    errCallback = mockery.spy();
                    
                    queryRunner = new QueryRunner({
                        rethinkdb: rethinkdb,
                        dbConnection: dbConnection
                    });
                });
                
                it ("Should call success callback on success", function() {
                    // Given
                    var cursor = { toArray: function() {} };
                    mockery.mock(cursor).
                        expects("toArray").
                        once().
                        callsArg(0);
                    
                    queryCallbackResultMock.expects("run").
                        once().
                        callsArgWith(1, null, cursor);

                    // When
                    try {
                        queryRunner.run(queryCallback).then(successCallback, errCallback);
                    } catch(e) {
                    }
                    
                    // Then
                    queryCallback.calledOnce.should.be.true;
                    queryCallback.calledWithExactly(r_db, rethinkdb).should.be.true;
                    successCallback.calledOnce.should.be.true;
                    errCallback.called.should.be.false;
                    mockery.verifyAndRestore();
                });

                it ("Should call error callback on error", function() {
                    // Given
                    queryCallbackResultMock.expects("run").
                        once().
                        callsArgWith(1, "error", {});
                    
                    // When
                    try {
                        queryRunner.run(queryCallback).then(successCallback, errCallback);
                    } catch(e) {
                    }
                    
                    // Then
                    queryCallback.calledOnce.should.be.true;
                    queryCallback.calledWithExactly(r_db, rethinkdb).should.be.true;
                    successCallback.called.should.be.false;
                    errCallback.calledOnce.should.be.true;
                    mockery.verifyAndRestore();
                });
            });
            
            it ("Should throw Error if no dbConnection provided", function() {
                // Given
                var queryRunner = new QueryRunner();
                
                // When
                try {
                    queryRunner.run(function(db, r) {});
                } catch(e) {
                }
                
                // Then
                queryRunner.run.should.throw(Error);
            });
        });
    }
});