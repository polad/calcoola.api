var db = require('rethinkdb');
var config = require('../config');

function run(queryCallback, cb) {
  db.connect({
    host: config.dbConnection.host,
    port: config.dbConnection.port,
    db: config.dbConnection.database
  }, function(err, conn) {
       queryCallback(db).run(
         conn,
         function(err, cursor) {
           if (err) {
             return cb(err);
           }
           return cursor.toArray(function (err, result) {
             if (err) {
               return cb(err);
             }
             return cb(null, result);
           });
         });
     });
}

exports.run = run;
