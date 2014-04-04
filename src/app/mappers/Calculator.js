define([
    "dojo/_base/declare",
    "dojo/Deferred"
], function (declare, Deferred) {
    return declare(null, {
        
        /**
         * app/mappers/QueryRunner
         */
        queryRunner: null,
        
        constructor: function(attributes) {
            declare.safeMixin(this, attributes);
        },
        
        /**
         * @return dojo/_base/Deferred
         */
        getByName: function (name) {
            if (this.queryRunner) {
                return this.queryRunner.run(function (db, r) {
                    return db.table("calculators").filter(r.row("name").match("(?i)"+name));
                });
            } else {
                var deferred = new Deferred();
                deferred.resolve([]);
                return deferred;
            }
        }
    });
});