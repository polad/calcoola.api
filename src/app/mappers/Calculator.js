define([
    "dojo/_base/declare",
    "app/mappers/QueryRunner"
], function (declare, QueryRunner) {
    return declare(null, {
        /**
         * @return dojo/_base/Deferred
         */
        getByName: function (name) {
            return this._buildQueryRunner().run(function (db, r) {
                return db.table('calculators').filter(r.row('name').match("(?i)"+name));
            });
        },
        
        _buildQueryRunner: function() {
            return new QueryRunner();
        }
    });
});