import assert from 'power-assert';
import RST from '../../lib/RST';
import {
  EnumeratedList,
  Document,
  ListItem,
  Paragraph,
  Text,
} from '../../lib/Elements';

function p(...children) { return new Paragraph({ children }); }
function ol(...children) { return new EnumeratedList({ children }); }
function li(...children) { return new ListItem({ children }); }
function t(s) { return new Text({ text: s }); }

describe('RST.parse', () => {
  [
    [
      'enumerated list with auto enumerator "#"',
      `\
#. Item one.
#. Item two.
#. Item three.
`,
      [
        ol(li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
