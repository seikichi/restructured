import assert from 'power-assert';
import RST from '../../lib/RST';
import {
  Document,
  Emphasis,
  Paragraph,
  Text,
} from '../../lib/Elements';

describe('RST.parse', () => {
  [
    [
      'an emphasis',
      '*emphasis*\n',
      [new Paragraph({ children: [new Emphasis({ children: [new Text({ text: 'emphasis' })] })] })],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
