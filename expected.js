import assert from 'node:assert';

function err () {
    try {
        assert.strictEqual(0, 1);
    } catch (e) {
        return e;
    }
}

let e = err();

console.log(e.stack);