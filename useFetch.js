"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
function useFetch(url, options, cb) {
    try {
        console.log(url, options);
        var func = (options === null || options === void 0 ? void 0 : options.method) == 'post' ? axios_1.default.post : axios_1.default.get;
        if (url && cb) {
            func(url, options && { headers: options === null || options === void 0 ? void 0 : options.header }).then(function (res) {
                if (res) {
                    return cb(null, res);
                }
            }).catch(function (err) {
                return cb(err, null);
            });
        }
        else {
            return cb(new TypeError('Please confirm arguments (url,{method,header},callback)'), null);
        }
    }
    catch (error) {
        return cb(error, null);
    }
}
exports.default = useFetch;
