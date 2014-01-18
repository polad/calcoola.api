module.exports = function() {
    return {
        defaultAction: function(req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.send({
                calculators: {
                    link: { href: "/calculators" }
                }
            });
            res.end();
        }
    };
}();