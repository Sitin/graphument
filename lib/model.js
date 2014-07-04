/**
 * Created by Mikhail Zyatin on 01.07.14.
 */


var Promise = require('bluebird'),
    _ = require('lodash');


/**
 * Creates Model constructor bounded to mapper
 * @param {Mapper} mapper
 * @returns {Model}
 */
var createModel = function (mapper) {
    /**
     * Constructs model and import document if specified
     * @param {Object} document
     * @constructor
     */
    var Model = function Model(document) {
        "use strict";
        this._defineProperties();

        if (document) {
            this.importDocument(document);
        }
    };

    // Model should depend on model
    Model.prototype._mapper = mapper;


    /**
     * Defines properties required by Model
     * @private
     */
    Model.prototype._defineProperties = function () {
        "use strict";
        Object.defineProperties(this, {
            _accessorNames: {
                value : [],
                writable : true
            },
            graphument: {
                get: function() {
                    return this._mapper.graphument;
                }
            }
        });
    };


    /**
     * Import document, transforms it and create an accessors
     * @param {Object} document
     */
    Model.prototype.importDocument = function (document) {
        "use strict";
        this._defineAccessors(Object.getOwnPropertyNames(document), document);
    };


    /**
     * Removes all accessors
     * @private
     */
    Model.prototype._removeAccessors = function () {
        "use strict";
        _.forEach(this._accessorNames, function (key) {
            delete this[key];
        }, this);
        this._accessorNames = [];
    };


    /**
     * Defines properties accessing to the target
     * @param {String[]} names
     * @param {Object} target
     * @private
     */
    Model.prototype._defineAccessors = function (names, target) {
        "use strict";
        this._removeAccessors();
        this._accessorNames = names;

        _.forEach(names, function (name) {
            Object.defineProperty(this, name, {
                enumerable: true,
                get: function () {
                    return target[name];
                },
                set: function (newValue) {
                    target[name] = newValue;
                }
            });
        }, this);
    };


    /**
     * Saves document into graph and return itself inside promise
     * @returns {Promise}
     */
    Model.prototype.save = Promise.method(function () {
        "use strict";
        return this;
    });

    return Model;
};


/**
 * Lazy-loads Model bounded to mapper instance
 * @returns {Model}
 */
module.exports = function getModel() {
    "use strict";
    if (this._Model) {
        return this._Model;
    } else {
        this._Model = createModel(this);
        return this._Model;
    }
};
