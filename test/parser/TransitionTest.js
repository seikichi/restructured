import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t, transition, section, title } from '../TestUtils';

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
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
