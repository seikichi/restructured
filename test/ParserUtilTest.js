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

  describe('.romanToNumber', () => {
    it('should parse "MCMXC" correctly', () => {
      assert(ParserUtil.romanToNumber('MCMXC') === 1990);
    });

    it('should parse "MDCLXVI" correctly', () => {
      assert(ParserUtil.romanToNumber('MDCLXVI') === 1666);
    });

    it('should parse "MMVIII" correctly', () => {
      assert(ParserUtil.romanToNumber('MMVIII') === 2008);
    });
  });

  describe('.numberToRoman', () => {
    it('should convert 1999 correctly', () => {
      assert(ParserUtil.numberToRoman(1999) === 'MCMXCIX');
    });

    it('should convert 1990 correctly', () => {
      assert(ParserUtil.numberToRoman(1990) === 'MCMXC');
    });

    it('should convert 1666 correctly', () => {
      assert(ParserUtil.numberToRoman(1666) === 'MDCLXVI');
    });

    it('should convert 2008 correctly', () => {
      assert(ParserUtil.numberToRoman(2008) === 'MMVIII');
    });
  });
});
