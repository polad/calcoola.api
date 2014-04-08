define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/Deferred"
], function (declare, lang, Deferred) {
    return declare(null, {
        
        /**
         * RethinkDB object
         */
        rethinkdb: null,
        
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
         * @throws Error
         */
        run: function (queryCallback) {
            if (!this.rethinkdb || !this.dbConnection) {
                throw new Error("No database connection provided.");
            }
            var deferred = new Deferred();
            this.rethinkdb.connect({
                host: this.dbConnection.host,
                port: this.dbConnection.port
            }, lang.hitch(this, function (err, conn) {
                queryCallback(this.rethinkdb.db(this.dbConnection.database), this.rethinkdb).
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