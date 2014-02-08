define([
    'intern!bdd',
    'intern/chai!expect'
], function (bdd, expect) {
    with (bdd) {
        describe('demo', function () {
            it('should demonstrate some behaviour', function () {
                expect(2).to.be.equal(2);
            });
        });
    }
});