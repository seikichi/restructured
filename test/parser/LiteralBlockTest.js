import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t, pre } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a paragraph and a literal block',
      `\
A paragraph:

::

    A literal block.
`,
      [p(t('A paragraph:\n')),
       pre('A literal block.')],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
