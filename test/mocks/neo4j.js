/**
 * Created by Mikhail Zyatin on 01.07.14.
 */


module.exports = function() {
    return {
        connect: function (url, callback) {
            "use strict";
            setImmediate(function () {
                callback(null, {
                    url: url
                });
            });
        }
    };
};
