define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "app/controllers/Root",
    "app/controllers/Calculator"
], function(declare, lang, RootController, CalculatorController) {
    return declare(null, {
        app: null,
        
        constructor: function(args) {
            declare.safeMixin(this, args);
            if (this.app) {
                this.load(this.app);
            }
        },
        
        load: function(app) {
            var rootController = this._buildRootController();
            var calculatorController = this._buildCalculatorController();
            app.get("/", lang.hitch(rootController, "defaultAction"));
            app.get("/calculators", lang.hitch(calculatorController, "getByName"));
        },
        
        _buildRootController: function() {
            return new RootController();
        },
        
        _buildCalculatorController: function() {
            return new CalculatorController();
        }
    });
});