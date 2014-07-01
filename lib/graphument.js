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
    this.defaults = {};
    Object.defineProperty(this, 'Mapper', { get: getMapper });
};
// The only thing that we exports is Graphument itself
module.exports = Graphument;


/**
 * Default driver is promisified version of neo4j-js
 */
Graphument.prototype.driver = neo4j;


// Rules
Graphument.prototype.group = require('./rules').group;
Graphument.prototype.linked = require('./rules').linked;
Graphument.prototype.relation = require('./rules').relation;
Graphument.prototype.unique = require('./rules').unique;


/**
 * Connects to Neo4j and promises for self initialized with connection.
 * @param {String} url
 * @returns {Promise}
 */
Graphument.prototype.connect = function connect(url) {
    "use strict";
    return Promise.promisify(this.driver.connect)(url).bind(this)
        .then(function (graph) {
            this._graph = Promise.promisifyAll(graph);
            return this;
        });
};
