import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t, em, strong, section, title } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a section with a paragraph',
      `\
Title
=====

Paragraph.
`,
      [section(title(t('Title')), p(t('Paragraph.\n')))],
    ],
    [
      'a section with a paragraph (no blank line)',
      `\
Title
=====
Paragraph.
`,
      [section(title(t('Title')), p(t('Paragraph.\n')))],
    ],
    [
      'a section surrounded by paragraphs',
      `\
Paragraph.

Title
=====

Paragraph.
`,
      [p(t('Paragraph.\n')), section(title(t('Title')), p(t('Paragraph.\n')))],
    ],
    [
      'a section with overline title',
      `\
=====
Title
=====

Test overline title.
`,
      [section(title(t('Title')), p(t('Test overline title.\n')))],
    ],
    [
      'overline title with inset',
      `\
=======
 Title
=======

Test overline title.
`,
      [section(title(t('Title')), p(t('Test overline title.\n')))],
    ],
    [
      'nested sections',
      `\
Title 1
=======
Paragraph 1.

Title 2
-------
Paragraph 2.

Title 3
=======
Paragraph 3.

Title 4
-------
Paragraph 4.
`,
      [
        section(title(t('Title 1')),
                p(t('Paragraph 1.\n')),
                section(title(t('Title 2')), p(t('Paragraph 2.\n')))),
        section(title(t('Title 3')),
                p(t('Paragraph 3.\n')),
                section(title(t('Title 4')), p(t('Paragraph 4.\n')))),
      ],
    ],
    [
      'nested sections with overlines',
      `\
Test return to existing, highest-level section (Title 3, with overlines).

=======
Title 1
=======
Paragraph 1.

-------
Title 2
-------
Paragraph 2.

=======
Title 3
=======
Paragraph 3.

-------
Title 4
-------
Paragraph 4.
`,
      [
        p(t('Test return to existing, highest-level section (Title 3, with overlines).\n')),
        section(title(t('Title 1')),
                p(t('Paragraph 1.\n')),
                section(title(t('Title 2')), p(t('Paragraph 2.\n')))),
        section(title(t('Title 3')),
                p(t('Paragraph 3.\n')),
                section(title(t('Title 4')), p(t('Paragraph 4.\n')))),
      ],
    ],
    [
      'nested sections with overlines (level 3)',
      `\
Title 1
=======
Paragraph 1.

Title 2
-------
Paragraph 2.

Title 3
+++++++
Paragraph 3.

Title 4
-------
Paragraph 4.
`,
      [
        section(title(t('Title 1')),
                p(t('Paragraph 1.\n')),
                section(title(t('Title 2')),
                        p(t('Paragraph 2.\n')),
                        section(title(t('Title 3')),
                                p(t('Paragraph 3.\n')))),
                section(title(t('Title 4')), p(t('Paragraph 4.\n')))),
      ],
    ],
    [
      'title containing inline markup',
      `\
Title containing *inline* **markup**
====================================

Paragraph.
`,
      [
        section(title(t('Title containing '),
                      em(t('inline')),
                      t(' '),
                      strong(t('markup'))),
                p(t('Paragraph.\n'))),
      ],
    ],
  ].forEach(([desc, input, children]) => {
    it(`should parse ${desc} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
