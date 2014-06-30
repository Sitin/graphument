/**
 * Created by Mikhail Zyatin on 30.06.14.
 */


_ = require('lodash');


/**
 * Creates a mapper.
 * @param {Graphument} graphument
 * @returns {Mapper}
 */
var createMapper = function(graphument) {
    "use strict";

    /**
     * Creates mapper initialized with rules
     * @param {Object} rules or single rule
     * @property {Array} rules
     * @constructor
     */
    var Mapper = function Mapper(rules) {
        // Import specified rules in internal format:
        this._rules = [];
        if (rules && Object.keys(rules).length === 1) {
            this.addRule(rules);
        } else {
            this.addRules(rules);
        }

        // We will access rules by properties:
        Object.defineProperty(this, 'rules', {
            get: function() { return this._rules; }
        });
    };

    // Mapper should depend on graphument
    Mapper.prototype._graphument = graphument;


    /**
     * Adds new rule
     * @param {String|Object} nameOrConfig
     * @param {Object} [config]
     * @returns {Mapper}
     */
    Mapper.prototype.addRule = function(nameOrConfig, config) {
        this._importRule(nameOrConfig, config);
        return this;
    };


    /**
     *
     * @param {Object} rules
     * @returns {Mapper}
     */
    Mapper.prototype.addRules = function(rules) {
        _.forEach(rules, (function(config, name) {
            this._importRule(name, config);
        }).bind(this));
        return this;
    };


    /**
     * Imports rule.
     * @param {String|Object} nameOrConfig
     * @param {Object} [config]
     * @private
     */
    Mapper.prototype._importRule = function(nameOrConfig, config) {
        if (typeof config !== 'undefined') {
            config.name = nameOrConfig;
        } else {
            config = nameOrConfig;
        }
        this._rules.push(config);
    };

    return Mapper;
};


/**
 *
 * @returns {Mapper}
 */
module.exports = function getMapper() {
    "use strict";
    if (this._Mapper) {
        return this._Mapper;
    } else {
        this._Mapper = createMapper(this);
        return this._Mapper;
    }
};