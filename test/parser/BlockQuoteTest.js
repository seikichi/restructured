import {
  assertNode,
  attribution,
  blockquote,
  comment,
  dd,
  dl,
  dli,
  dt,
  p,
  t,
} from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a simple block quote',
      `\
Line 1.
Line 2.

   Indented.
`,
      [
        p(t('Line 1.\n'), t('Line 2.\n')),
        blockquote(p(t('Indented.\n'))),
      ],
    ],
    [
      'a nested block quote',
      `\
Line 1.
Line 2.

   Indented 1.

      Indented 2.
`,
      [
        p(t('Line 1.\n'), t('Line 2.\n')),
        blockquote(p(t('Indented 1.\n')), blockquote(p(t('Indented 2.\n')))),
      ],
    ],
    [
      'a nested block quote (nested block quote comes first)',
      `\
Here is a paragraph.

        Indent 8 spaces.

    Indent 4 spaces.

Is this correct? Should it generate a warning?
Yes, it is correct, no warning necessary.
`,
      [
        p(t('Here is a paragraph.\n')),
        blockquote(blockquote(p(t('Indent 8 spaces.\n'))),
                   p(t('Indent 4 spaces.\n'))),
        p(t('Is this correct? Should it generate a warning?\n'),
          t('Yes, it is correct, no warning necessary.\n')),
      ],
    ],
    [
      'two block quotes with attribution',
      `\
Paragraph.

   Block quote.

   -- Attribution

Paragraph.

   Block quote.

   --Attribution
`,
      [
        p(t('Paragraph.\n')),
        blockquote(p(t('Block quote.\n')),
                   attribution(t('Attribution\n'))),
        p(t('Paragraph.\n')),
        blockquote(p(t('Block quote.\n')),
                   attribution(t('Attribution\n'))),
      ],
    ],
    [
      'block quotes with attribution that begin with em-dash',
      `\
Alternative: true em-dash.

   Block quote.

   \u2014 Attribution

Alternative: three hyphens.

   Block quote.

   --- Attribution
`,
      [
        p(t('Alternative: true em-dash.\n')),
        blockquote(p(t('Block quote.\n')),
                   attribution(t('Attribution\n'))),
        p(t('Alternative: three hyphens.\n')),
        blockquote(p(t('Block quote.\n')),
                   attribution(t('Attribution\n'))),
      ],
    ],
    [
      'block quotes with multi line attribution',
      `\
Paragraph.

   Block quote.

   -- Attribution line one
   and line two

Paragraph.

   Block quote.

   -- Attribution line one
      and line two

Paragraph.
`,
      [
        p(t('Paragraph.\n')),
        blockquote(p(t('Block quote.\n')),
                   attribution(t('Attribution line one\n'),
                               t('and line two\n'))),
        p(t('Paragraph.\n')),
        blockquote(p(t('Block quote.\n')),
                   attribution(t('Attribution line one\n'),
                               t('and line two\n'))),
        p(t('Paragraph.\n')),
      ],
    ],
    [
      'a block quote with simple attribution',
      `\
Paragraph.

   Block quote 1.

   -- Attribution 1

   Block quote 2.

   -- Attribution 2
`,
      [
        p(t('Paragraph.\n')),
        blockquote(p(t('Block quote 1.\n')),
                   attribution(t('Attribution 1\n'))),
        blockquote(p(t('Block quote 2.\n')),
                   attribution(t('Attribution 2\n'))),
      ],
    ],
    [
      'a block quote with simple attribution',
      `\
Paragraph.

   Block quote 1.

   -- Attribution 1

   Block quote 2.
`,
      [
        p(t('Paragraph.\n')),
        blockquote(p(t('Block quote 1.\n')),
                   attribution(t('Attribution 1\n'))),
        blockquote(p(t('Block quote 2.\n'))),
      ],
    ],
    [
      'two block quotes with an empty comment',
      `\
Unindented paragraph.

    Block quote 1.

    -- Attribution 1

    Block quote 2.

..

    Block quote 3.
`,
      [
        p(t('Unindented paragraph.\n')),
        blockquote(p(t('Block quote 1.\n')),
                   attribution(t('Attribution 1\n'))),
        blockquote(p(t('Block quote 2.\n'))),
        comment(),
        blockquote(p(t('Block quote 3.\n'))),
      ],
    ],
    [
      'block quote with attribution like definition list',
      `\
Paragraph.

   -- Not an attribution

Paragraph.

   Block quote.

   \\-- Not an attribution

Paragraph.

   Block quote.

   -- Not an attribution line one
      and line two
          and line three
`,
      [
        p(t('Paragraph.\n')),
        blockquote(p(t('-- Not an attribution\n'))),
        p(t('Paragraph.\n')),
        blockquote(p(t('Block quote.\n')),
                   p(t('\\-- Not an attribution\n'))),
        p(t('Paragraph.\n')),
        blockquote(p(t('Block quote.\n')),
                   dl(dli(dt(t('-- Not an attribution line one')),
                          dd(dl(dli(dt(t('and line two')),
                                    dd(p(t('and line three\n'))))))))),
      ],
    ],
    [
      'block quote with complicated attribution',
      `\
Paragraph.

   -- Not a valid attribution

   Block quote 1.

   --Attribution 1

   --Invalid attribution

   Block quote 2.

   --Attribution 2
`,
      [
        p(t('Paragraph.\n')),
        blockquote(p(t('-- Not a valid attribution\n')),
                   p(t('Block quote 1.\n')),
                   attribution(t('Attribution 1\n'))),
        blockquote(p(t('--Invalid attribution\n')),
                   p(t('Block quote 2.\n')),
                   attribution(t('Attribution 2\n'))),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => assertNode(input, children));
  });
});
