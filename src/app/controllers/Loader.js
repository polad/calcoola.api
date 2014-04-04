define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "app/config",
    "app/controllers/Root",
    "app/controllers/Calculator",
    "app/mappers/Calculator",
    "app/mappers/QueryRunner"
], function(declare, lang, appConfig, RootController, CalculatorController, CalculatorMapper, QueryRunner) {
    return declare(null, {
        app: null,
        
        constructor: function(attributes) {
            declare.safeMixin(this, attributes);
            if (this.app) {
                this.load(this.app);
            }
        },
        
        load: function(app) {
            var rootController = this._buildRootController();
            
            var queryRunner = this._buildQueryRunner({ dbConnection: appConfig.dbConnection });
            var calculatorMapper = this._buildCalculatorMapper({ queryRunner: queryRunner });
            var calculatorController = this._buildCalculatorController({ calculatorMapper: calculatorMapper });
            
            app.get("/", lang.hitch(rootController, "defaultAction"));
            app.get("/calculators", lang.hitch(calculatorController, "getByName"));
        },
        
        _buildRootController: function(attributes) {
            return new RootController(attributes);
        },
        
        _buildCalculatorController: function(attributes) {
            return new CalculatorController(attributes);
        },
        
        _buildCalculatorMapper: function(attributes) {
            return new CalculatorMapper(attributes);
        },
        
        _buildQueryRunner: function(attributes) {
            return new QueryRunner(attributes);
        }
    });
});