import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t, dl, dli, dt, dd } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a simple definition list',
      `\
term
  definition
`,
      [dl(dli(dt(t('term')), dd(p(t('definition\n')))))],
    ],
    [
      'a simple definition list and paragraph',
      `\
term
  definition

paragraph
`,
      [
        dl(dli(dt(t('term')), dd(p(t('definition\n'))))),
        p(t('paragraph\n')),
      ],
    ],
    [
      'a definition list with 2 items',
      `\
term 1
  definition 1

term 2
  definition 2
`,
      [
        dl(dli(dt(t('term 1')), dd(p(t('definition 1\n')))),
           dli(dt(t('term 2')), dd(p(t('definition 2\n'))))),
      ],
    ],
    [
      'a definition list with 2 items with no blank line',
      `\
term 1
  definition 1 (no blank line below)
term 2
  definition 2
`,
      [
        dl(dli(dt(t('term 1')), dd(p(t('definition 1 (no blank line below)\n')))),
           dli(dt(t('term 2')), dd(p(t('definition 2\n'))))),
      ],
    ],
    [
      'nested definition list',
      `\
term 1
  definition 1

  term 1a
    definition 1a

  term 1b
    definition 1b

term 2
  definition 2

paragraph
`,
      [
        dl(dli(dt(t('term 1')),
               dd(p(t('definition 1\n')),
                  dl(dli(dt(t('term 1a')),
                         dd(p(t('definition 1a\n')))),
                     dli(dt(t('term 1b')),
                         dd(p(t('definition 1b\n'))))))),
           dli(dt(t('term 2')),
               dd(p(t('definition 2\n'))))),
        p(t('paragraph\n')),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
