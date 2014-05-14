var r = require("rethinkdb");
var when = require("when");

var conn;

exports.run = function (message, queryCallback) {
    return when(conn ? conn : connect(), function(conn) {
        return when.promise(function(resolve, reject, notify) {
            console.log("==> " + message);
            queryCallback(r).
                run(conn, function(err, result) {
                    if (err) {
                        console.log("====> DB failed with: " + err.message);
                        reject(err);
                    } else {
                        console.log("    > Success");
                        resolve(result);
                    }
                });
        });
    });
};

var connect = function() {
    return when.promise(function(resolve, reject, notify) {
        r.connect({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            db: process.env.DB_DATABASE
        }, function(err, connection) {
            if (err) {
                console.log("==> Error connecting to DB: " + err.message);
                reject(err);
            } else {
                conn = connection;
                resolve(connection);
            }
        });
    });
};