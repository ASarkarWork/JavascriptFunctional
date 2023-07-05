import {map, filter, reduce, forEach} from './impls.js';
import assert from 'node:assert';

function mapTests() {
    let arr = [1, 2, 3, 4];
    assert.deepEqual(map(arr, (x) => x * 2), [2, 4, 6, 8]);
}
function filterTests() {
    let arr = [1, 2, 3, 4];
    assert.deepEqual(filter(arr, (x) => x % 2 == 1), [1, 3]);
}
function reduceTests() {
    let arr = [1, 2, 3, 4];
    assert.deepEqual(reduce(arr, (item, accumulator) => {
        return item + accumulator;
    }, 0), 10);
}
function forEachTests() {
    let arr = [1, 2, 3, 4];

    let string = "";

    forEach(arr, (item) => {
        string += item;
    });

    assert.deepEqual(string, "1234");
}
function allTests() {
    console.log("Running all tests");
    mapTests();
    filterTests();
    reduceTests();
    forEachTests();
}

allTests();