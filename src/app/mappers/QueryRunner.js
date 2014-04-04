define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/node!rethinkdb",
    "dojo/Deferred"
], function (declare, lang, r, Deferred) {
    return declare(null, {
        
        /**
         * DB connectivity details
         * {
         *   host: "xxx",
         *   port: 0000,
         *   database: "xxx"
         * }
         */
        dbConnection: null,
        
        constructor: function(attributes) {
            declare.safeMixin(this, attributes);
        },
        
        /**
         * @return dojo/_base/Deferred
         */
        run: function (queryCallback) {
            var deferred = new Deferred();
            r.connect({
                host: this.dbConnection.host,
                port: this.dbConnection.port
            }, lang.hitch(this, function (err, conn) {
                queryCallback(r.db(this.dbConnection.database), r).
                    run(conn, function(err, cursor) {
                        if (err) {
                            deferred.reject(err);
                        } else {
                            cursor.toArray(function (err, result) {
                                deferred.resolve(result);
                            });
                        }
                    });
            }));
            return deferred;
        }
    });
});