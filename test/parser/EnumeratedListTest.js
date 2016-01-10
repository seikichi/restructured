import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, ol, li, t } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'enumerated list',
      `\
1. Item one.

2. Item two.

3. Item three.
`,
      [
        ol(li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
    [
      'enumerated list without blan lines between items',
      `\
No blank lines betwen items:

1. Item one.
2. Item two.
3. Item three.
`,
      [
        p(t('No blank lines betwen items:\n')),
        ol(li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
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
    [
      'enumerated list that starts with non-ordinal-1',
      `\
Start with non-ordinal-1:

0. Item zero.
1. Item one.
2. Item two.
3. Item three.

And again:

2. Item two.
3. Item three.
`,
      [
        p(t('Start with non-ordinal-1:\n')),
        ol(li(p(t('Item zero.\n'))),
           li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
        p(t('And again:\n')),
        ol(li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
    [
      'enumerated list with multiple body elements',
      `\
1. Item one: line 1,
   line 2.
2. Item two: line 1,
   line 2.
3. Item three: paragraph 1, line 1,
   line 2.

   Paragraph 2.
`,
      [
        ol(li(p(t('Item one: line 1,\n'), t('line 2.\n'))),
           li(p(t('Item two: line 1,\n'), t('line 2.\n'))),
           li(p(t('Item three: paragraph 1, line 1,\n'), t('line 2.\n')),
              p(t('Paragraph 2.\n')))),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
