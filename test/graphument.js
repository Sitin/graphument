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
var Graphument = require('../lib/graphument'),
    graphument = new Graphument();


describe('graphument', function() {
    "use strict";

    it('should be able to connect', function() {
        expect(graphument).to.have.property('connect');
        expect(graphument.connect).to.be.a('function');
    });

    it('should have Mapper constructor', function() {
        expect(graphument).to.have.property('Mapper');
        expect(graphument.Mapper).to.be.a('function');
    });

    it('should return the same Mapper each time', function() {
       expect(graphument.Mapper).equals(graphument.Mapper);
    });
});
