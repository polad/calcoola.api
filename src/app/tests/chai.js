define([
    "intern-chai",
    "chai-things",
    "chai-as-promised",
], function(chai, chaiThings, chaiAsPromised) {
    chai.use(chaiThings);
    chai.use(chaiAsPromised);
    return chai;
});