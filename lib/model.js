/**
 * Created by Mikhail Zyatin on 01.07.14.
 */



var createModel = function (mapper) {
    var Model = function Model (document) {
        "use strict";
        this.document = document;
    };

    // Model should depend on model
    Model.prototype._mapper = mapper;

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
