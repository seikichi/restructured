import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t, dl, dli, dt, dd, classifier } from '../TestUtils';

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
    [
      'a simple definition list with classifier',
      `\
Term : classifier
    The ' : ' indicates a classifier in
    definition list item terms only.
`,
      [dl(dli(dt(t('Term')),
              classifier(t('classifier')),
              dd(p(t('The \' : \' indicates a classifier in\n'),
                   t('definition list item terms only.\n')))))],
    ],
    [
      'a simple definition list without classifier',
      `\
Term: not a classifier
    Because there's no space before the colon.
Term :not a classifier
    Because there's no space after the colon.
Term \\: not a classifier
    Because the colon is escaped.
`,
      [dl(dli(dt(t('Term: not a classifier')),
              dd(p(t('Because there\'s no space before the colon.\n')))),
          dli(dt(t('Term :not a classifier')),
              dd(p(t('Because there\'s no space after the colon.\n')))),
          dli(dt(t('Term \\: not a classifier')),
              dd(p(t('Because the colon is escaped.\n')))))],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
