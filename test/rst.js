import assert from 'power-assert';
import rst from '../lib/rst';

describe('add', () => {
  it('should parse', () => {
    assert.deepEqual(rst.parse('hoge'), ['h', 'o', 'g', 'e']);
  });
});
