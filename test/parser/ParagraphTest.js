import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a single line paragraph',
      `\
A paragraph.
`,
      [p(t('A paragraph.\n'))],
    ],
    [
      'multiple single line paragraphs',
      `\
Paragraph 1.

Paragraph 2.
`,
      [p(t('Paragraph 1.\n')), p(t('Paragraph 2.\n'))],
    ],
    [
      'a multi line paragraph',
      `\
Line 1.
Line 2.
Line 3.
`,
      [p(t('Line 1.\n'), t('Line 2.\n'), t('Line 3.\n'))],
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
        p(t('Paragraph 1, Line 1.\n'), t('Line 2.\n'), t('Line 3.\n')),
        p(t('Paragraph 2, Line 1.\n'), t('Line 2.\n'), t('Line 3.\n')),
      ],
    ],
    [
      'a simple paragraph',
      `\
A. Einstein was a really
smart dude.
`,
      [p(t('A. Einstein was a really\n'), t('smart dude.\n'))],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
