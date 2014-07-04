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
    graphument,
    Mapper,
    mapper,
    Model,
    model,
    document;


beforeEach(function() {
    "use strict";
    graphument = new Graphument();
    Mapper = graphument.Mapper;
    mapper = new Mapper();
    Model = mapper.Model;
    document = {
        spam: 'Spam',
        eggs: 'Eggs'
    };
    model = new Model(document);
});


describe('model', function () {
    "use strict";

    it('should be able to save', function () {
        expect(model).to.respondTo('save');
    });

    it('should provide access do document', function () {
        expect(model).to.have.property('spam', 'Spam');
        model.spam = 'Eggs';
        expect(document).to.have.property('spam', 'Eggs');
    });

    it('should provide access to graphument', function () {
        expect(mapper.graphument).equals(graphument);
        expect(function () { mapper.graphument = false; }).to.throw(Error);
    });
});