import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document } from '../../lib/Elements';
import {
  blockquote,
  comment,
  dd,
  dl,
  dli,
  dt,
  li,
  p,
  t,
  ul,
} from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'a comment and a paragraph',
      `\
.. A comment

Paragraph.
`,
      [comment(t('A comment')), p(t('Paragraph.\n'))],
    ],
    [
      'a comment consisting of two lines and a paragraph',
      `\
.. A comment
   block.

Paragraph.
`,
      [comment(t('A comment'), t('block.')), p(t('Paragraph.\n'))],
    ],
    [
      'a comment consisting of multiple lines',
      `\
..
   A comment consisting of multiple lines
   starting on the line after the
   explicit markup start.
`,
      [
        comment(t('A comment consisting of multiple lines'),
                t('starting on the line after the'),
                t('explicit markup start.')),
      ],
    ],
    [
      'multiple comments and a paragraph',
      `\
.. A comment.
.. Another.

Paragraph.
`,
      [comment(t('A comment.')), comment(t('Another.')), p(t('Paragraph.\n'))],
    ],
    [
      'a comment with double colons and a paragraph',
      `\
.. A comment::

Paragraph.
`,
      [comment(t('A comment::')), p(t('Paragraph.\n'))],
    ],
    [
      'a comment similar to directive',
      `\
..
   comment::

Paragraph.
`,
      [comment(t('comment::')), p(t('Paragraph.\n'))],
    ],
    [
      'a comment similar to hyperlink target',
      `\
..
   _comment: http://example.org

Paragraph.
`,
      [comment(t('_comment: http://example.org')), p(t('Paragraph.\n'))],
    ],
    [
      'a comment similar to citation',
      `\
..
   [comment] Not a citation.

Paragraph.
`,
      [comment(t('[comment] Not a citation.')), p(t('Paragraph.\n'))],
    ],
    [
      'a comment similar to substitution definition',
      `\
..
   |comment| image:: bogus.png

Paragraph.
`,
      [comment(t('|comment| image:: bogus.png')), p(t('Paragraph.\n'))],
    ],
    [
      'a comment followed by an empty comment',
      `\
.. Next is an empty comment, which serves to end this comment and
   prevents the following block quote being swallowed up.

..

    A block quote.
`,
      [
        comment(t('Next is an empty comment, which serves to end this comment and'),
                t('prevents the following block quote being swallowed up.')),
        comment(),
        blockquote(p(t('A block quote.\n'))),
      ],
    ],
    [
      'a comment in definition list item',
      `\
term 1
  definition 1

  .. a comment

term 2
  definition 2
`,
      [
        dl(dli(dt(t('term 1')), dd(p(t('definition 1\n')), comment(t('a comment')))),
           dli(dt(t('term 2')), dd(p(t('definition 2\n'))))),
      ],
    ],
    [
      'a comment between definition lists',
      `\
term 1
  definition 1

.. a comment

term 2
  definition 2
`,
      [
        dl(dli(dt(t('term 1')), dd(p(t('definition 1\n'))))),
        comment(t('a comment')),
        dl(dli(dt(t('term 2')), dd(p(t('definition 2\n'))))),
      ],
    ],
    [
      'a comment in bullet list item',
      `\
+ bullet paragraph 1

  bullet paragraph 2

  .. comment between bullet paragraphs 2 and 3

  bullet paragraph 3
`,
      [
        ul(li(p(t('bullet paragraph 1\n')),
              p(t('bullet paragraph 2\n')),
              comment(t('comment between bullet paragraphs 2 and 3')),
              p(t('bullet paragraph 3\n')))),
      ],
    ],
    [
      'a comment between bullet paragraphs',
      `\
+ bullet paragraph 1

  .. comment between bullet paragraphs 1 (leader) and 2

  bullet paragraph 2
`,
      [
        ul(li(p(t('bullet paragraph 1\n')),
              comment(t('comment between bullet paragraphs 1 (leader) and 2')),
              p(t('bullet paragraph 2\n')))),
      ],
    ],
    [
      'a trailing comment in bullet list item',
      `\
+ bullet

  .. trailing comment
`,
      [ul(li(p(t('bullet\n')), comment(t('trailing comment'))))],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
