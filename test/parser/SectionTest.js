import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t, section, title } from '../TestUtils';

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
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
