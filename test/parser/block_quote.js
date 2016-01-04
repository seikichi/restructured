import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document, Paragraph, BlockQuote, Text, Attribution } from '../../lib/Elements';

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
          children: [
            new Paragraph({ children: [new Text({ text: 'Indented.\n' })] }),
          ],
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
          children: [
            new Text({ text: 'Line 1.\n' }),
            new Text({ text: 'Line 2.\n' }),
          ],
        }),
        new BlockQuote({
          children: [
            new Paragraph({ children: [new Text({ text: 'Indented 1.\n' })] }),
            new BlockQuote({
              children: [
                new Paragraph({ children: [new Text({ text: 'Indented 2.\n' })] }),
              ],
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
              children: [
                new Paragraph({ children: [new Text({ text: 'Indent 8 spaces.\n' })] }),
              ],
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
          children: [
            new Paragraph({ children: [new Text({ text: 'Block quote 1.\n' })] }),
          ],
          attribution: new Attribution({
            children: [
              new Text({ text: 'Attribution 1\n' })
            ],
          }),
        }),
        new BlockQuote({
          children: [
            new Paragraph({ children: [new Text({ text: 'Block quote 2.\n' })] }),
          ],
        }),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
