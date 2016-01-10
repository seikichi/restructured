import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t, strong } from '../TestUtils';

const s = strong(t('strong'));

describe('RST.parse', () => {
  [
    ['an strong emphasis', '**strong**\n', [p(s, t('\n'))]],
    [
      'strong emphasis with apostrophe',
      `\
l'**strong** and l\u2019**strong** with apostrophe
`,
      [p(t('l\''), s, t(' and l\u2019'), s, t(' with apostrophe\n'))],
    ],
    [
      'quoted strongs',
      `\
quoted '**strong**', quoted "**strong**",
quoted \u2018**strong**\u2019, quoted \u201c**strong**\u201d,
quoted \xab**strong**\xbb
`,
      [
        p(t('quoted \''), s, t('\', quoted "'), s, t('",\n'),
          t('quoted \u2018'), s, t('\u2019, quoted \u201c'), s, t('\u201d,\n'),
          t('quoted \xab'), s, t('\xbb\n')),
      ],
    ],
    [
      'not strong **',
      `\
(**strong**) but not (**) or '(** ' or x**2 or \\**kwargs or **
`,
      [p(t('('), s, t(') but not (**) or \'(** \' or x**2 or \\**kwargs or **\n'))],
    ],
    [
      'strong asterisk',
      `\
Strong asterisk: *****

Strong double asterisk: ******
`,
      [
        p(t('Strong asterisk: '), strong(t('*')), t('\n')),
        p(t('Strong double asterisk: '), strong(t('**')), t('\n')),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
