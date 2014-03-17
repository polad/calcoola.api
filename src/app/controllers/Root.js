define([
    "dojo/_base/declare"
], function(declare) {
    return declare(null, {
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