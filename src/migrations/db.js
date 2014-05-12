var r = require("rethinkdb");
var when = require("when");

exports.connectToDB = function() {
    return when.promise(function(resolve, reject, notify) {
        console.log("==> Connecting to database: " + process.env.DB_DATABASE +
                    " on " + process.env.DB_HOST + ":" + process.env.DB_PORT + "...");
        r.connect({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            db: process.env.DB_DATABASE
        }, function(err, conn) {
            if (err) {
                console.log("====> Error connecting to DB! Reason: " + err.message);
                reject(err);
            } else {
                console.log("    > Success");
                resolve({ conn: conn });
            }
        });
    });
};

exports.createTable = function(tableName) {
    return function(obj) {
        return when.promise(function(resolve, reject, notify) {
            console.log("==> Creating table: " + tableName + "...");
            r.tableCreate(tableName).
                run(obj.conn, function(err, result) {
                    if (err) {
                        console.log("====> Error creating table '" + tableName + "'! Reason: " + err.message);
                        reject(err);
                    } else {
                        console.log("    > Success");
                        resolve({
                            conn: obj.conn,
                            table: r.table(tableName),
                            result: result
                        });
                    }
                });
        });
    };
};

exports.createIndex = function(indexName) {
    return function(obj) {
        return when.promise(function(resolve, reject, notify) {
            obj.table.info().run(obj.conn, function(err, result) {
                var tableName = result.name;
                console.log("==> Creating index: " + indexName + " on table " + tableName + "...");
                obj.table.indexCreate(indexName).
                    run(obj.conn, function(err, result) {
                        if (err) {
                            console.log("====> Error creating index '" + indexName + "' on table '" + tableName + "'! Reason: " + err.message);
                            reject(err);
                        } else {
                            console.log("    > Success");
                            resolve({
                                conn: obj.conn,
                                table: obj.table,
                                result: result
                            });
                        }
                    });
            });
        });
    };
};

exports.insert = function(data) {
    return function(obj) {
        return when.promise(function(resolve, reject, notify) {
            console.log("==> Inserting data into table...");
            obj.table.insert(data).
                run(obj.conn, function(err, result) {
                    if (err) {
                        console.log("====> Error inserting data! Reason: " + err.message);
                        reject(err);
                    } else {
                        console.log("    > Success");
                        resolve({
                            conn: obj.conn,
                            table: obj.table,
                            result: result
                        });
                    }
                });
        });
    };
};

exports.dropTable = function(tableName) {
    return function(obj) {
        return when.promise(function(resolve, reject, notify) {
            console.log("==> Dropping table: " + tableName + "...");
            r.tableDrop(tableName).
                run(obj.conn, function(err, result) {
                    if (err) {
                        console.log("====> Error dropping table '" + tableName + "'! Reason: " + err.message);
                        reject(err);
                    } else {
                        console.log("    > Success");
                        resolve({
                            conn: obj.conn,
                            result: result
                        });
                    }
                });
        });
    };
};