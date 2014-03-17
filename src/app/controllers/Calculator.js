define([
    "dojo/_base/declare",
    "app/mappers/Calculator"
], function(declare, CalculatorMapper) {
    return declare(null, {
        getByName: function(req, res) {
            this._buildCalculatorMapper().
                getByName(req.query.name).then(function (result) {
                    res.setHeader('Content-Type', 'applicaiton/json');
                    res.send(200, result);
                    res.end();
                });
        },
        
        _buildCalculatorMapper: function() {
            return new CalculatorMapper();
        }
    });
});