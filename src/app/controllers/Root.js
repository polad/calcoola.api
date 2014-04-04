define([
    "dojo/_base/declare",
    "app/controllers/_Controller"
], function(declare, _Controller) {
    return declare([ _Controller ], {
        defaultAction: function(req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.send({
                calculators: {
                    link: { href: "/calculators" }
                }
            });
            res.end();
        }
    });
});