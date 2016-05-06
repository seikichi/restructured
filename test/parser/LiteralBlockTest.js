import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t, pre } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a fully minimized literal block',
      `\
A paragraph::

    A literal block.
`,
      [p(t('A paragraph')), pre('A literal block.')],
    ],
    [
      'a paragraph with a space after the colons and a literal block',
      `\
A paragraph with a space after the colons:: \n\

    A literal block.
`,
      [p(t('A paragraph with a space after the colons')), pre('A literal block.')],
    ],
    [
      'two literal blocks between paragraphs',
      `\
A paragraph::

    A literal block.

Another paragraph::

    Another literal block.
    With two blank lines following.


A final paragraph.
`,
      [
        p(t('A paragraph')),
        pre('A literal block.'),
        p(t('Another paragraph')),
        pre('Another literal block.', 'With two blank lines following.'),
        p(t('A final paragraph.\n')),
      ],
    ],
    [
      'A paragraph on more than one line and a literal block',
      `\
A paragraph
on more than
one line::

    A literal block.
`,
      [p(t('A paragraph\n'), t('on more than\n'), t('one line')), pre('A literal block.')],
    ],
//     [
//       'literal blocks and escapes',
//       `\
// A paragraph\\\\::

//     A literal block.

// A paragraph\\::

//     Not a literal block.
// `,
//       [],
//     ],
//     [
//       'literal blocks and escapes',
//       `\
// \\\\::

//     A literal block.

// \\::

//     Not a literal block.
// `,
//       [],
//     ],
    [
      'partially minimized indented literal block',
      `\
A paragraph: ::

    A literal block.
`,
      [p(t('A paragraph: ')), pre('A literal block.')],
    ],
    [
      'expanded literal block',
      `\
A paragraph:

::

    A literal block.
`,
      [p(t('A paragraph:\n')), pre('A literal block.')],
    ],
    [
      'a wonky literal block',
      `\
A paragraph::

    A wonky literal block.
  Literal line 2.

    Literal line 3.
`,
      [
        p(t('A paragraph')),
        pre('  A wonky literal block.', 'Literal line 2.', '', '  Literal line 3.'),
      ],
    ],
    [
      'quoted literal block',
      `\
A paragraph::

> A literal block.
`,
      [p(t('A paragraph')), pre('> A literal block.')],
    ],
    [
      'quoted literal block with two blank lines',
      `\
A paragraph::


> A literal block.
`,
      [p(t('A paragraph')), pre('> A literal block.')],
    ],
    [
      'multi line quoted literal block',
      `\
A paragraph::

> A literal block.
> Line 2.
`,
      [p(t('A paragraph')), pre('> A literal block.', '> Line 2.')],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
