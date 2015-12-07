var QueryRunner = require('./QueryRunner');

function getByName(name, cb) {
  QueryRunner.run(function (db) {
    return db.table('calculators').
      filter(db.row('name').match('(?i)' + name)).
      orderBy('name').
      limit(100);
  }, cb);
}

exports.getByName = getByName;
