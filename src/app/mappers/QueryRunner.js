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
        dbConnConfig: null,
        
        constructor: function(attributes) {
            declare.safeMixin(this, attributes);
        },
        
        /**
         * @return dojo/_base/Deferred
         * @throws Error
         */
        run: function (queryCallback) {
            if (!this.rethinkdb || !this.dbConnConfig) {
                throw new Error("No database connection provided.");
            }
            var deferred = new Deferred();
            this.rethinkdb.connect({
                host: this.dbConnConfig.host,
                port: this.dbConnConfig.port,
                db: this.dbConnConfig.database
            }, lang.hitch(this, function (err, conn) {
                queryCallback(this.rethinkdb).
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