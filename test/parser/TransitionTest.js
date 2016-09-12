import { p, t, transition, section, title, assertNode } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a transition surrounded by paragraphs',
      `\
Test transition markers.

--------

Paragraph
`,
      [
        p(t('Test transition markers.\n')),
        transition(),
        p(t('Paragraph\n')),
      ],
    ],
    [
      'transitions and sections',
      `\
Section 1
=========
First text division of section 1.

--------

Second text division of section 1.

Section 2
---------
Paragraph 2 in section 2.
`,
      [
        section(title(t('Section 1')),
                p(t('First text division of section 1.\n')),
                transition(),
                p(t('Second text division of section 1.\n')),
                section(title(t('Section 2')),
                        p(t('Paragraph 2 in section 2.\n')))),
      ],
    ],
    [
      'multiple transitions',
      `\
--------

A section or document may not begin with a transition.

The DTD specifies that two transitions may not
be adjacent:

--------

--------

--------

The DTD also specifies that a section or document
may not end with a transition.

--------
`,
      [
        transition(),
        p(t('A section or document may not begin with a transition.\n')),
        p(t('The DTD specifies that two transitions may not\n'),
          t('be adjacent:\n')),
        transition(),
        transition(),
        transition(),
        p(t('The DTD also specifies that a section or document\n'),
          t('may not end with a transition.\n')),
        transition(),
      ],
    ],
    [
      'short transition marker',
      `\
Short transition marker.

---

Paragraph
`,
      [
        p(t('Short transition marker.\n')),
        p(t('---\n')),
        p(t('Paragraph\n')),
      ],
    ],
    [
      'sections with transitions at beginning and end',
      `\
Sections with transitions at beginning and end.

Section 1
=========

----------

The next transition is legal:

----------

Section 2
=========

----------
`,
      [
        p(t('Sections with transitions at beginning and end.\n')),
        section(title(t('Section 1')),
                transition(),
                p(t('The next transition is legal:\n')),
                transition()),
        section(title(t('Section 2')),
                transition()),
      ],
    ],
    [
      'a paragraph with two transitions and a blank line',
      `\
A paragraph, two transitions, and a blank line.

----------

----------

`,
      [
        p(t('A paragraph, two transitions, and a blank line.\n')),
        transition(),
        transition(),
      ],
    ],
    [
      'document beginning with a transition',
      `\
----------

Document beginning with a transition.
`,
      [
        transition(),
        p(t('Document beginning with a transition.\n')),
      ],
    ],
    [
      'sections with transition',
      `\
Section 1
=========

Subsection 1
------------

Some text.

----------

Section 2
=========

Some text.
`,
      [
        section(title(t('Section 1')),
                section(title(t('Subsection 1')),
                        p(t('Some text.\n')),
                        transition())),
        section(title(t('Section 2')),
                p(t('Some text.\n'))),
      ],
    ],
    [
      'sections with multiple transitions',
      `\
Section 1
=========

----------

----------

----------

Section 2
=========

Some text.
`,
      [
        section(title(t('Section 1')),
                transition(),
                transition(),
                transition()),
        section(title(t('Section 2')),
                p(t('Some text.\n'))),
      ],
    ],
    [
      'three transitions only',
      `\
----------

----------

----------
`,
      [transition(), transition(), transition()],
    ],
    [
      'A paragraph and a transition',
      `\
A paragraph.

----------
`,
      [p(t('A paragraph.\n')), transition()],
    ],
  ].forEach(([test, input, children]) => {
    it(`should parse ${test} correctly`, () => assertNode(input, children));
  });
});
