import { em, t, line, lineblock, assertNode } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a simple line block',
      `\
| This is a line block.
`,
      [
        lineblock(line(t('This is a line block.'))),
      ],
    ],
    [
      'multiple simple line blocks',
      `\
| This is a line block.
| Line breaks are *preserved*.

| This is a second line block.

| This is a third.
`,
      [
        lineblock(line(t('This is a line block.')),
                  line(t('Line breaks are '), em(t('preserved')), t('.'))),
        lineblock(line(t('This is a second line block.'))),
        lineblock(line(t('This is a third.'))),
      ],
    ],
    [
      '',
      `\
| In line blocks,
|     Initial indentation is *also* preserved.
`,
      [
        lineblock(line(t('In line blocks,')),
                  lineblock(line(t('Initial indentation is '), em(t('also')), t(' preserved.')))),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => assertNode(input, children));
  });
});
