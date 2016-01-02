import assert from 'power-assert';
import Paragraph from '../../lib/nodes/Paragraph';

describe('Paragraph', () => {
  describe('.parse', () => {
    it('should return hogehoge', () => {
      assert(Paragraph.parse('Hello, world!') instanceof Paragraph);
    });
  });
});
