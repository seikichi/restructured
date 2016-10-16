import assert from 'power-assert';
import RST from '../lib/RST';

describe('RST', () => {
  describe('.parse', () => {
    it('should returns Document', () => {
      assert(RST.parse('').type === 'document');
    });
  });
});
