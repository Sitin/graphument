/**
 * Created by Mikhail Zyatin on 30.06.14.
 */


var expect = require('chai').expect,
    Sut = require('..'),
    Graphument = require('../lib/graphument');


describe('main module', function () {
    it('should export Graphument constructor', function() {
        expect(Sut).to.be.a('function');
        expect(new Sut()).to.be.instanceOf(Graphument);
    });
});
