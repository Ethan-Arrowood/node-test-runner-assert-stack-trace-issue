import test from 'node:test';
import assert from 'node:assert';

void test('should fail', () => {
  assert.strictEqual(0, 1);
});
