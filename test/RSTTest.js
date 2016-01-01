import assert from 'power-assert';
import RST from '../lib/RST';

import Document from '../lib/nodes/Document';

describe('RST', () => {
  describe('.parse', () => {
    it('should returns Document instance', () => {
      assert(RST.parse('') instanceof Document);
    });
  });
});
