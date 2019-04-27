"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dep_test_producer_1 = require("dep-test-producer");
exports.test = 42 * 2;
exports.arr = [
    { a: 1, b: '1' },
    { a: 2, b: '2' }
];
exports.indexBy = dep_test_producer_1.lodash.keyBy(exports.arr, 'a'); // Should compile - keyBy exists in lodash@4.x.x
