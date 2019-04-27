"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
exports.test = 42 * 2;
exports.arr = [
    { a: 1, b: '1' },
    { a: 2, b: '2' }
];
exports.indexBy = _.indexBy(exports.arr, 'a');
