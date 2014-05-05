define([
    "dojo/node!rethinkdb",
    "app/config",
    "app/mappers/QueryRunner"
], function(rethinkdb, appConfig, QueryRunner) {
    return new QueryRunner({
        rethinkdb: rethinkdb,
        dbConnConfig: appConfig.dbConnection
    });
});