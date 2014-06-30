/**
 * Created by Mikhail Zyatin on 30.06.14.
 */


var expect = require('chai').expect,
    Graphument = require('../lib/graphument'),
    graphument = new Graphument(),
    Mapper = graphument.Mapper;


describe('graphument', function() {
    "use strict";

    it('should have rules accessor', function() {
        expect(new Mapper()).to.have.property('rules');
    });

    it('should import rules at construction', function() {
        var mapper = new Mapper({eggs: 'Spam'});

        // TODO: Remove implementation specific assertions
        expect(mapper.rules.length).equals(1);
    });

    it('should be able to add rules', function() {
        var mapper = new Mapper();
        expect(mapper).to.have.property('addRule');
        expect(mapper.addRule).to.be.a('function');

        // TODO: Remove implementation specific assertions
        mapper.addRule('spam', {eggs: 'Spam'});
        mapper.addRule({spam: 'Spam'});
        expect(mapper.rules.length).to.be.equals(2);
    });

    // TODO: Remove implementation specific test
    it('should add rules in specific format', function() {
        var mapper = new Mapper();

        mapper.addRule({spam: 'Spam'});
        expect(mapper.rules).deep.equals([{spam: 'Spam'}]);

        mapper.addRule('spam', {eggs: 'Spam'});
        expect(mapper.rules).deep.equals([
            {spam: 'Spam'},
            {eggs: 'Spam', name: 'spam'}
        ]);
    });
});