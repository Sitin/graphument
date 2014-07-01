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

// Mocks
neo4j = require('./mocks/neo4j');
tweet = require('./mocks/tweet');


describe('main module', function () {
    "use strict";

    it('should export Graphument constructor', function () {
        expect(Sut).to.be.a('function');
        expect(new Sut()).to.be.instanceOf(Graphument);
    });
});


describe('basic workflow', function () {
    "use strict";

    it('should not be broken', function (done) {
        var graphument, userMapper, tweetMapper, result;

        graphument = new Graphument();

        userMapper = new graphument.Mapper('User', {
            id_str: graphument.unique()
        });

        tweetMapper = new graphument.Mapper('Tweet');
        tweetMapper.addRules({
            status_id_str: graphument.unique(),
            user: graphument.linked({
                out: 'POSTED_BY',
                in: 'POSTED',
                mapper: userMapper
            }),
            in_reply_to: graphument.group({
                condition: /^in_reply_to_(.+)/,
                type: graphument.relation({
                    link: {
                        key: 'status_id_str',
                        fk: 'id_str',
                        out: 'REPLIED_TO',
                        in: 'REPLIED_WITH'
                    },
                    b: tweetMapper
                })
            })
        });

        graphument.driver = neo4j();
        result = graphument.connect('http://localhost:7474/db/data/')
            .then(function () {
                return new tweetMapper.Model(tweet);
            });

        expect(result).to.be.fulfilled.notify(done);
    });
});
