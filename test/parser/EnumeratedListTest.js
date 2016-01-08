import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, ol, li, t } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'enumerated list with auto enumerator "#"',
      `\
#. Item one.
#. Item two.
#. Item three.
`,
      [
        ol(li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
