define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "app/services/controllers/Root",
    "app/services/controllers/Calculator"
], function(declare, lang, rootController, calculatorController) {
    return declare(null, {
        app: null,
        
        constructor: function(attributes) {
            declare.safeMixin(this, attributes);
            if (this.app) {
                this.load(this.app);
            }
        },
        
        load: function(app) {
            app.get("/", lang.hitch(rootController, "defaultAction"));
            app.get("/calculators", lang.hitch(calculatorController, "getByName"));
        }
    });
});