/**
 * Created by Mikhail Zyatin on 01.07.14.
 */


/**
 * Neo4j graph mock
 * @param queryMap
 * @constructor
 */
var Graph = function (queryMap) {
    "use strict";
    this.queries = [];
    this.queryMap = queryMap;
};


/**
 * Executes query.
 * @param {Batch} batch
 * @param {String} query
 * @param {Boolean} [profile]
 * @param {Object} [params]
 * @param callback
 */
Graph.prototype.query = function(batch, query, profile, params, callback) {
    "use strict";
    var args = this._parseQueryArguments(batch, query, profile, params, callback);

    this.queries.push(args);

    setImmediate(function () {
        args.callback(null, this.getResultForQuery(args));
    }.bind(this));
};


/**
 * Parses arguments for query method
 * @returns {{}}
 */
Graph.prototype._parseQueryArguments = function () {
    var args = Array.prototype.slice.call(arguments),
        options = {};

    options.batch = (args[0] instanceof Batch) ? args.shift() : null;
    options.callback = args.pop() || null;
    options.query = args.shift() || null;
    options.profile = args.shift() || null;
    options.params = args.shift() || null;

    return options;
};


/**
 * Calculates or returns predefined result for query.
 * @param {Object} options
 * @returns {*}
 */
Graph.prototype.getResultForQuery = function (options) {
    "use strict";
    var queryConfig = this.queryMap[options.query];
    if (typeof queryConfig.result === 'function') {
        return queryConfig.result(options);
    } else {
        return queryConfig.result;
    }
};


/**
 * Bath is dummy for now
 * @constructor
 */
var Batch = function () {
    "use strict";
};


/**
 * Returns neo4j-js mock
 * @param {Object} queryMap
 * @returns {{connect: Function}}
 */
module.exports = function(queryMap) {
    var driver = {
        connect: function (url, callback) {
            "use strict";
            setImmediate(function () {
                this.graph = new Graph(queryMap);
                callback(null, this.graph);
            }.bind(driver));
        }
    };
    return driver;
};
