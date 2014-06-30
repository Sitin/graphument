/**
 * Created by Mikhail Zyatin on 30.06.14.
 */


var neo4j = require('neo4j-js'),
    Promise = require("bluebird"),
    _ = require('lodash'),
    getMapper = require('./mapper');


/**
 * Graphument constructor function
 * @constructor
 */
var Graphument = function Graphument() {
    "use strict";
    Object.defineProperty(this, 'Mapper', { get: getMapper });
};
// The only thing that we exports is Graphument itself
module.exports = Graphument;


/**
 * Connects to Neo4j and promises for self initialized with connection.
 * @param {String} url
 * @returns {Promise}
 */
Graphument.prototype.connect = function connect(url) {
    "use strict";
    return Promise.promisify(neo4j.connect)(url)
        .then(function(graph) {
            this._graph = graph;
            return this;
        })
        .bind(this);
};
