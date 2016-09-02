import assert from 'power-assert';
import RST from '../../lib/RST';
import {
  Attribution,
  BlockQuote,
  Comment,
  Definition,
  DefinitionList,
  DefinitionListItem,
  Document,
  Paragraph,
  Term,
  Text,
} from '../../lib/Elements';

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
        new Paragraph({
          children: [
            new Text({ text: 'Line 1.\n' }),
            new Text({ text: 'Line 2.\n' }),
          ],
        }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Indented.\n' })] })],
        }),
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
        new Paragraph({
          children: [new Text({ text: 'Line 1.\n' }), new Text({ text: 'Line 2.\n' })],
        }),
        new BlockQuote({
          children: [
            new Paragraph({ children: [new Text({ text: 'Indented 1.\n' })] }),
            new BlockQuote({
              children: [new Paragraph({ children: [new Text({ text: 'Indented 2.\n' })] })],
            }),
          ],
        }),
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
        new Paragraph({ children: [new Text({ text: 'Here is a paragraph.\n' })] }),
        new BlockQuote({
          children: [
            new BlockQuote({
              children: [new Paragraph({ children: [new Text({ text: 'Indent 8 spaces.\n' })] })],
            }),
            new Paragraph({ children: [new Text({ text: 'Indent 4 spaces.\n' })] }),
          ],
        }),
        new Paragraph({
          children: [
            new Text({ text: 'Is this correct? Should it generate a warning?\n' }),
            new Text({ text: 'Yes, it is correct, no warning necessary.\n' }),
          ],
        }),
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
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote.\n' })] })],
          attribution: new Attribution({ children: [new Text({ text: 'Attribution\n' })] }),
        }),
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote.\n' })] })],
          attribution: new Attribution({ children: [new Text({ text: 'Attribution\n' })] }),
        }),
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
        new Paragraph({ children: [new Text({ text: 'Alternative: true em-dash.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote.\n' })] })],
          attribution: new Attribution({ children: [new Text({ text: 'Attribution\n' })] }),
        }),
        new Paragraph({ children: [new Text({ text: 'Alternative: three hyphens.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote.\n' })] })],
          attribution: new Attribution({ children: [new Text({ text: 'Attribution\n' })] }),
        }),
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
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote.\n' })] })],
          attribution: new Attribution({
            children: [new Text({ text: 'Attribution line one\n' }),
                       new Text({ text: 'and line two\n' })],
          }),
        }),
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote.\n' })] })],
          attribution: new Attribution({
            children: [new Text({ text: 'Attribution line one\n' }),
                       new Text({ text: 'and line two\n' })],
          }),
        }),
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
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
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote 1.\n' })] })],
          attribution: new Attribution({ children: [new Text({ text: 'Attribution 1\n' })] }),
        }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote 2.\n' })] })],
          attribution: new Attribution({ children: [new Text({ text: 'Attribution 2\n' })] }),
        }),
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
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote 1.\n' })] })],
          attribution: new Attribution({ children: [new Text({ text: 'Attribution 1\n' })] }),
        }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote 2.\n' })] })],
        }),
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
        new Paragraph({ children: [new Text({ text: 'Unindented paragraph.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote 1.\n' })] })],
          attribution: new Attribution({ children: [new Text({ text: 'Attribution 1\n' })] }),
        }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote 2.\n' })] })],
        }),
        new Comment({ }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: 'Block quote 3.\n' })] })],
        }),
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
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [new Paragraph({ children: [new Text({ text: '-- Not an attribution\n' })] })],
        }),
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [
            new Paragraph({ children: [new Text({ text: 'Block quote.\n' })] }),
            new Paragraph({ children: [new Text({ text: '\\-- Not an attribution\n' })] }),
          ],
        }),
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [
            new Paragraph({ children: [new Text({ text: 'Block quote.\n' })] }),
            new DefinitionList({
              children: [
                new DefinitionListItem({
                  term: new Term({ children: [
                    new Text({ text: '-- Not an attribution line one' }),
                  ] }),
                  definition: new Definition({
                    children: [
                      new DefinitionList({
                        children: [
                          new DefinitionListItem({
                            term: new Term({ children: [new Text({ text: 'and line two' })] }),
                            definition: new Definition({
                              children: [
                                new Paragraph({ children: [
                                  new Text({ text: 'and line three\n' }),
                                ] }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
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
        new Paragraph({ children: [new Text({ text: 'Paragraph.\n' })] }),
        new BlockQuote({
          children: [
            new Paragraph({ children: [new Text({ text: '-- Not a valid attribution\n' })] }),
            new Paragraph({ children: [new Text({ text: 'Block quote 1.\n' })] }),
          ],
          attribution: new Attribution({
            children: [
              new Text({ text: 'Attribution 1\n' }),
            ],
          }),
        }),
        new BlockQuote({
          children: [
            new Paragraph({ children: [new Text({ text: '--Invalid attribution\n' })] }),
            new Paragraph({ children: [new Text({ text: 'Block quote 2.\n' })] }),
          ],
          attribution: new Attribution({
            children: [
              new Text({ text: 'Attribution 2\n' }),
            ],
          }),
        }),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
