import assert from 'power-assert';
import RST from '../lib/RST';

import Elements from '../lib/Elements';

describe('RST', () => {
  describe('.parse', () => {
    it('should returns Document instance', () => {
      assert(RST.parse('') instanceof Elements.Document);
    });
  });
});
