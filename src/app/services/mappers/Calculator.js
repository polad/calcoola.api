define([
    "app/services/mappers/QueryRunner",
    "app/mappers/Calculator"
], function(queryRunner, CalculatorMapper) {
    return new CalculatorMapper({ queryRunner: queryRunner });
});