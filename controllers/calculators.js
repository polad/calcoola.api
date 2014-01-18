var r = require('rethinkdb');
var rdbConn = null;

var getCalculators = function(req, res) {
    (req.query.name ?
     r.db('calcoola').table('calculators').filter(r.row('name').match("(?i)"+req.query.name)) :
     r.db('calcoola').table('calculators')
    ).run(rdbConn, function(err, cursor) {
        if (err) throw err;
        cursor.toArray(function(err, result) {
            res.send(200, result);
            res.end();
        });
    });
};

module.exports = function() {
    return {
        defaultAction: function(req, res) {
            res.setHeader('Content-Type', 'applicaiton/json');
            r.connect({
                host: 'localhost',
                port: 28015
            }, function(err, conn) {
                rdbConn = conn;
                getCalculators(req, res);
            });
        }
    };
}();