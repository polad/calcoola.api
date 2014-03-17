define([
    "dojo/_base/declare",
    "dojo/node!rethinkdb",
    "dojo/_base/Deferred",
    "app/config"
], function (declare, r, Deferred, config) {
    var dbConnection = config.dbConnection;
    return declare(null, {
        /**
         * @return dojo/_base/Deferred
         */
        run: function (queryCallback) {
            var deferred = new Deferred();
            r.connect({
                host: dbConnection.host,
                port: dbConnection.port
            }, function (err, conn) {
                queryCallback(r.db(dbConnection.database), r).
                    run(conn, function(err, cursor) {
                        if (err) {
                            deferred.reject(err);
                        } else {
                            cursor.toArray(function (err, result) {
                                deferred.resolve(result);
                            });
                        }
                    });
            });
            return deferred;
        }
    });
});