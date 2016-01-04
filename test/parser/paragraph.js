import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document, Paragraph, Text } from '../../lib/Elements';

describe('RST.parse', () => {
  [
    [
      'a single line paragraph',
      `\
A paragraph.
`,
      [
        new Paragraph({ children: [new Text({ text: 'A paragraph.\n' })] }),
      ],
    ],
    [
      'multiple single line paragraphs',
      `\
Paragraph 1.

Paragraph 2.
`,
      [
        new Paragraph({ children: [new Text({ text: 'Paragraph 1.\n' })] }),
        new Paragraph({ children: [new Text({ text: 'Paragraph 2.\n' })] }),
      ],
    ],
    [
      'a multi line paragraph',
      `\
Line 1.
Line 2.
Line 3.
`,
      [
        new Paragraph({
          children: [
            new Text({ text: 'Line 1.\n' }),
            new Text({ text: 'Line 2.\n' }),
            new Text({ text: 'Line 3.\n' }),
          ],
        }),
      ],
    ],
    [
      'multi line paragraphs',
      `\
Paragraph 1, Line 1.
Line 2.
Line 3.

Paragraph 2, Line 1.
Line 2.
Line 3.
`,
      [
        new Paragraph({
          children: [
            new Text({ text: 'Paragraph 1, Line 1.\n' }),
            new Text({ text: 'Line 2.\n' }),
            new Text({ text: 'Line 3.\n' }),
          ],
        }),
        new Paragraph({
          children: [
            new Text({ text: 'Paragraph 2, Line 1.\n' }),
            new Text({ text: 'Line 2.\n' }),
            new Text({ text: 'Line 3.\n' }),
          ],
        }),
      ],
    ],
    [
      'a simple paragraph',
      `\
A. Einstein was a really
smart dude.
`,
      [
        new Paragraph({
          children: [
            new Text({ text: 'A. Einstein was a really\n' }),
            new Text({ text: 'smart dude.\n' }),
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
