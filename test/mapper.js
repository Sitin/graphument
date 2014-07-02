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
    graphument = new Graphument(),
    Mapper,
    mapper;


beforeEach(function() {
    "use strict";
    graphument = new Graphument();
    Mapper = graphument.Mapper;
    mapper = new Mapper();
});


describe('mapper', function () {
    "use strict";

    it('should have rules accessor', function () {
        expect(mapper).to.have.property('rules');
    });

    it('should support labels', function () {
        expect(new Mapper('Spam')).to.have.property('label', 'Spam');
    });

    it('should set empty labels to default', function () {
        mapper = new Mapper();
        graphument.defaults.label = 'Spam';
        expect(mapper).to.have.property('label', 'Spam');
    });

    it('should import rules at construction', function () {
        var mapper = new Mapper('Spam', {eggs: 'Spam'});

        // TODO: Remove implementation specific assertions
        expect(mapper.rules.length).equals(1);
    });

    it('should be able to add rules', function () {
        expect(mapper).to.have.property('addRule');
        expect(mapper.addRule).to.be.a('function');

        // TODO: Remove implementation specific assertions
        mapper.addRule('spam', {eggs: 'Spam'});
        mapper.addRule({spam: 'Spam'});
        expect(mapper.rules.length).to.be.equals(2);
    });

    // TODO: Remove implementation specific test
    it('should add rules in specific format', function () {
        mapper.addRule({spam: 'Spam'});
        expect(mapper.rules).deep.equals([
            {spam: 'Spam'}
        ]);

        mapper.addRule('spam', {eggs: 'Spam'});
        expect(mapper.rules).deep.equals([
            {spam: 'Spam'},
            {eggs: 'Spam', name: 'spam'}
        ]);
    });

    it('should have Model constructor', function () {
        expect(mapper).to.have.property('Model');
        expect(mapper.Model).to.be.a('function');
    });

    it('should return the same Mapper each time', function () {
        expect(mapper.Model).equals(mapper.Model);
    });
});