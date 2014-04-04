define([
    "dojo/_base/declare",
    "app/controllers/_Controller"
], function(declare, _Controller) {
    return declare([ _Controller ], {

        /**
         * app/mappers/Calculator
         */
        calculatorMapper: null,
        
        getByName: function(req, res) {
            res.setHeader('Content-Type', 'applicaiton/json');
            if (this.calculatorMapper) {
                this.calculatorMapper.getByName(req.query.name).
                    then(function (result) {
                        res.send(200, result);
                        res.end();
                    });
            } else {
                res.send(200, "");
                res.end();
            }
        }
    });
});