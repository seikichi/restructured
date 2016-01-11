import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import { p, t, tt } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a simple literal',
      '``literal``\n',
      [p(tt(t('literal')), t('\n'))],
    ],
    [
      'a simple literal starts with backslash',
      '``\\literal``\n',
      [p(tt(t('\\literal')), t('\n'))],
    ],
    [
      'a simple literal contains backslash',
      '``lite\\ral``\n',
      [p(tt(t('lite\\ral')), t('\n'))],
    ],
    [
      'a simple literal ends with backslash',
      '``literal\\``\n',
      [p(tt(t('literal\\')), t('\n'))],
    ],
    [
      'literals with apostrophe',
      'l\'``literal`` and l\u2019``literal`` with apostrophe\n',
      [p(t('l\''), tt(t('literal')), t(' and l\u2019'), tt(t('literal')), t(' with apostrophe\n'))],
    ],
    [
      'quoted literals',
      'quoted \'``literal``\', quoted "``literal``"\n' +
        'quoted \u2018``literal``\u2019, quoted \u201c``literal``\u201d,\n' +
        'quoted \xab``literal``\xbb\n',
      [
        p(t('quoted \''), tt(t('literal')), t('\', quoted "'), tt(t('literal')), t('"\n'),
          t('quoted \u2018'), tt(t('literal')), t('\u2019, quoted \u201c'), tt(t('literal')), t('\u201d,\n'),
          t('quoted \xab'), tt(t('literal')), t('\xbb\n')),
      ],
    ],
    [
      'literals with qutoes',
      '``\'literal\'`` with quotes, ``"literal"`` with quotes,\n' +
        '``\u2018literal\u2019`` with quotes, ``\u201cliteral\u201d`` with quotes,\n' +
        '``\xabliteral\xbb`` with quotes\n',
      [
        p(tt(t('\'literal\'')), t(' with quotes, '), tt(t('"literal"')), t(' with quotes,\n'),
          tt(t('\u2018literal\u2019')), t(' with quotes, '), tt(t('\u201cliteral\u201d')), t(' with quotes,\n'),
          tt(t('\xabliteral\xbb')), t(' with quotes\n')),
      ],
    ],
    [
      'literals likes interpreted text',
      'Find the ```interpreted text``` in this paragraph!\n',
      [p(t('Find the '), tt(t('`interpreted text`')), t(' in this paragraph!\n'))],
    ],
    [
      'literal ends with backslash',
      'Python ``list``\\s use square bracket syntax.\n',
      [p(t('Python '), tt(t('list')), t('\\s use square bracket syntax.\n'))],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
