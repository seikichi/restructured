import assert from 'power-assert';
import ParserUtil from '../lib/ParserUtil';

describe('ParserUtil', () => {
  describe('.calcIndentSize', () => {
    it('should return 0 when empty string', () => {
      assert(ParserUtil.calcIndentSize('') === 0);
    });

    it('should return # of spaces when tab is not present', () => {
      assert(ParserUtil.calcIndentSize('   ') === 3);
    });

    it('should count vertical tabs as single spaces', () => {
      assert(ParserUtil.calcIndentSize(' \v') === 2);
    });

    it('should count form feeds as single spaces', () => {
      assert(ParserUtil.calcIndentSize(' \f') === 2);
    });

    it('should convert tabs to spaces (tab stops are every 8th column)', () => {
      assert(ParserUtil.calcIndentSize(' \t') === 8);
    });

    it('should calc indent size correctly when multiple tabs given', () => {
      assert(ParserUtil.calcIndentSize(' \t       \t') === 16);
    });
  });
});
