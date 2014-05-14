var db = require("./db");
var data = require("./data/calculators");

exports.up = function(next) {

    db.run("Creating table 'calculators'...", function(r) {
        return r.tableCreate("calculators");
    }).then(function(prevResult) {
        return db.run("Creating index 'name' on table 'calculators'...", function(r) {
            return r.table("calculators").indexCreate("name");
        });
    }).then(function(prevResult) {
        return db.run("Inserting data into 'calculators' table...", function(r) {
            return r.table("calculators").insert(data.calculators);
        });
    }).then(function() {
        next();
    });

};

exports.down = function(next) {

    db.run("Dropping table 'calculators'...", function(r) {
        return r.tableDrop("calculators");
    }).then(function() {
        next();
    });

};