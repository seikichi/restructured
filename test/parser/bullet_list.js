import assert from 'power-assert';
import RST from '../../lib/RST';
import {
  BulletList,
  Document,
  ListItem,
  Paragraph,
  Text,
} from '../../lib/Elements';

function p(...children) { return new Paragraph({ children }); }
function ul(...children) { return new BulletList({ children }); }
function li(...children) { return new ListItem({ children }); }
function t(s) { return new Text({ text: s }); }

describe('RST.parse', () => {
  [
    [
      'a single bullet list item',
      `\
- item
`,
      [ul(li(p(t('item\n'))))],
    ],
    [
      'multiple bullet list items',
      `\
* item 1

* item 2
`,
      [ul(li(p(t('item 1\n'))), li(p(t('item 2\n'))))],
    ],
    [
      'bullet list items no blank line between',
      `\
No blank line between:

+ item 1
+ item 2
`,
      [
        p(t('No blank line between:\n')),
        ul(li(p(t('item 1\n'))), li(p(t('item 2\n')))),
      ],
    ],
    [
      'bullet list items with multi line body',
      `\
- item 1, para 1.

  item 1, para 2.

- item 2
`,
      [
        ul(li(p(t('item 1, para 1.\n')), p(t('item 1, para 2.\n'))),
           li(p(t('item 2\n')))),
      ],
    ],
    [
      'bullet list items with no blank line with multi line body',
      `\
- item 1, para 1.
  item 1, para 2.
- item 2
`,
      [
        ul(li(p(t('item 1, para 1.\n'), t('item 1, para 2.\n'))),
           li(p(t('item 2\n')))),
      ],
    ],
    [
      'different marker bullet lists',
      `\
Different bullets:

- item 1

+ item 2

* item 3
- item 4
`,
      [
        p(t('Different bullets:\n')),
        ul(li(p(t('item 1\n')))),
        ul(li(p(t('item 2\n')))),
        ul(li(p(t('item 3\n')))),
        ul(li(p(t('item 4\n')))),
      ],
    ],
    [
      'bullet list with empty item',
      `\
-

empty item above
`,
      [ul(li()), p(t('empty item above\n'))],
    ],
    [
      'unicode bullets',
      `\
Unicode bullets:

\u2022 BULLET

\u2023 TRIANGULAR BULLET

\u2043 HYPHEN BULLET
`,
      [
        p(t('Unicode bullets:\n')),
        ul(li(p(t('BULLET\n')))),
        ul(li(p(t('TRIANGULAR BULLET\n')))),
        ul(li(p(t('HYPHEN BULLET\n')))),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
