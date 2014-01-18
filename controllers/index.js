var rootController = require('./root');
var calculatorsController = require('./calculators');

exports.configureRoutes = function(app) {
    app.get("/", rootController.defaultAction);
    app.get("/calculators", calculatorsController.defaultAction);
};