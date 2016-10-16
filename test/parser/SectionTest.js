import {
  assertNode,
  blockquote,
  em,
  p,
  section,
  strong,
  t,
  title,
} from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a section with a paragraph',
      `\
Title
=====

Paragraph.
`,
      [section(1, title(t('Title')), p(t('Paragraph.\n')))],
    ],
    [
      'a section with a paragraph (no blank line)',
      `\
Title
=====
Paragraph.
`,
      [section(1, title(t('Title')), p(t('Paragraph.\n')))],
    ],
    [
      'a section surrounded by paragraphs',
      `\
Paragraph.

Title
=====

Paragraph.
`,
      [p(t('Paragraph.\n')), section(1, title(t('Title')), p(t('Paragraph.\n')))],
    ],
    [
      'a section with overline title',
      `\
=====
Title
=====

Test overline title.
`,
      [section(1, title(t('Title')), p(t('Test overline title.\n')))],
    ],
    [
      'overline title with inset',
      `\
=======
 Title
=======

Test overline title.
`,
      [section(1, title(t('Title')), p(t('Test overline title.\n')))],
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
        section(1,
                title(t('Title 1')),
                p(t('Paragraph 1.\n')),
                section(2, title(t('Title 2')), p(t('Paragraph 2.\n')))),
        section(1,
                title(t('Title 3')),
                p(t('Paragraph 3.\n')),
                section(2, title(t('Title 4')), p(t('Paragraph 4.\n')))),
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
        section(1,
                title(t('Title 1')),
                p(t('Paragraph 1.\n')),
                section(2, title(t('Title 2')), p(t('Paragraph 2.\n')))),
        section(1, title(t('Title 3')),
                p(t('Paragraph 3.\n')),
                section(2, title(t('Title 4')), p(t('Paragraph 4.\n')))),
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
        section(1,
                title(t('Title 1')),
                p(t('Paragraph 1.\n')),
                section(2,
                        title(t('Title 2')),
                        p(t('Paragraph 2.\n')),
                        section(3,
                                title(t('Title 3')),
                                p(t('Paragraph 3.\n')))),
                section(2, title(t('Title 4')), p(t('Paragraph 4.\n')))),
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
        section(1,
                title(t('Title containing '),
                      em(t('inline')),
                      t(' '),
                      strong(t('markup'))),
                p(t('Paragraph.\n'))),
      ],
    ],
    [
      'numbered title',
      `\
1. Numbered Title
=================

Paragraph.
`,
      [
        section(1,
                title(t('1. Numbered Title')),
                p(t('Paragraph.\n'))),
      ],
    ],
    [
      'short title',
      `\
ABC
===

Short title.
`,
      [section(1, title(t('ABC')), p(t('Short title.\n')))],
    ],
    [
      'blockquote like section',
      `\
Paragraph

    ABC
    ==

    Underline too short.
`,
      [
        p(t('Paragraph\n')),
        blockquote(p(t('ABC\n'), t('==\n')), p(t('Underline too short.\n'))),
      ],
    ],
    [
      'empty section',
      `\
Empty Section
=============
`,
      [section(1, title(t('Empty Section')))],
    ],
    [
      'sections with short titles',
      `\
===
One
===

The bubble-up parser strategy conflicts with short titles
(<= 3 char-long over- & underlines).

===
Two
===

The parser currently contains a work-around kludge.
Without it, the parser ends up in an infinite loop.
`,
      [
        section(1,
                title(t('One')),
                p(t('The bubble-up parser strategy conflicts with short titles\n'),
                  t('(<= 3 char-long over- & underlines).\n'))),
        section(1,
                title(t('Two')),
                p(t('The parser currently contains a work-around kludge.\n'),
                  t('Without it, the parser ends up in an infinite loop.\n'))),
      ],
    ],
  ].forEach(([desc, input, children]) => {
    it(`should parse ${desc} correctly`, () => assertNode(input, children));
  });
});
