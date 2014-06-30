/**
 * Created by Mikhail Zyatin on 30.06.14.
 */


// Testing dependencies:
var chai = require('chai'),
    sinon = require("sinon"),
    expect = chai.expect;

// Setup Chai
chai.use(require('chai-as-promised'));
chai.use(require("sinon-chai"));

// SUT
var Sut = require('..'),
    Graphument = require('../lib/graphument');


describe('main module', function () {
    it('should export Graphument constructor', function() {
        expect(Sut).to.be.a('function');
        expect(new Sut()).to.be.instanceOf(Graphument);
    });
});
