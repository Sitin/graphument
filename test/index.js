/**
 * Created by Mikhail Zyatin on 30.06.14.
 */


var expect = require('chai').expect,
    graphument = require('..'),
    Graphument = require('../lib/graphument');


describe('main module', function () {
    it('should export instance of Graphument', function (done) {
        expect(graphument).to.be.instanceOf(Graphument);
        done();
    });
});
