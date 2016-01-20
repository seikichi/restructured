import assert from 'power-assert';
import RST from '../../lib/RST';
import {
  Definition,
  DefinitionList,
  DefinitionListItem,
  Document,
  Term,
} from '../../lib/Elements';
import { p, ol, li, t } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'enumerated list',
      `\
1. Item one.

2. Item two.

3. Item three.
`,
      [
        ol(li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
    [
      'enumerated list without blan lines between items',
      `\
No blank lines betwen items:

1. Item one.
2. Item two.
3. Item three.
`,
      [
        p(t('No blank lines betwen items:\n')),
        ol(li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
    [
      'empty item above, no blank line',
      `\
1.
empty item above, no blank line
`,
      [p(t('1.\n'), t('empty item above, no blank line\n'))],
    ],
    [
      'scrambled enumerated list',
      `\
Scrambled:

3. Item three.

2. Item two.

1. Item one.

3. Item three.
2. Item two.
1. Item one.
`,
      [
        p(t('Scrambled:\n')),
        ol(li(p(t('Item three.\n')))),
        ol(li(p(t('Item two.\n')))),
        ol(li(p(t('Item one.\n')))),
        p(t('3. Item three.\n'),
          t('2. Item two.\n'),
          t('1. Item one.\n')),
      ],
    ],
    [
      'skipping enumerated item',
      `\
Skipping item 3:

1. Item 1.
2. Item 2.
4. Item 4.
`,
      [
        p(t('Skipping item 3:\n')),
        ol(li(p(t('Item 1.\n')))),
        p(t('2. Item 2.\n'),
          t('4. Item 4.\n')),
      ],
    ],
    [
      'enumerated list start with non-ordinal-1',
      `\
Start with non-ordinal-1:

0. Item zero.
1. Item one.
2. Item two.
3. Item three.

And again:

2. Item two.
3. Item three.
`,
      [
        p(t('Start with non-ordinal-1:\n')),
        ol(li(p(t('Item zero.\n'))),
           li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
        p(t('And again:\n')),
        ol(li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
    [
      'enumerated list with multiple body elements',
      `\
1. Item one: line 1,
   line 2.
2. Item two: line 1,
   line 2.
3. Item three: paragraph 1, line 1,
   line 2.

   Paragraph 2.
`,
      [
        ol(li(p(t('Item one: line 1,\n'), t('line 2.\n'))),
           li(p(t('Item two: line 1,\n'), t('line 2.\n'))),
           li(p(t('Item three: paragraph 1, line 1,\n'), t('line 2.\n')),
              p(t('Paragraph 2.\n')))),
      ],
    ],
    [
      'enumerated lists with different enumeration sequences',
      `\
Different enumeration sequences:

1. Item 1.
2. Item 2.
3. Item 3.

A. Item A.
B. Item B.
C. Item C.

a. Item a.
b. Item b.
c. Item c.

I. Item I.
II. Item II.
III. Item III.

i. Item i.
ii. Item ii.
iii. Item iii.
`,
      [
        p(t('Different enumeration sequences:\n')),
        ol(li(p(t('Item 1.\n'))),
           li(p(t('Item 2.\n'))),
           li(p(t('Item 3.\n')))),
        ol(li(p(t('Item A.\n'))),
           li(p(t('Item B.\n'))),
           li(p(t('Item C.\n')))),
        ol(li(p(t('Item a.\n'))),
           li(p(t('Item b.\n'))),
           li(p(t('Item c.\n')))),
        ol(li(p(t('Item I.\n'))),
           li(p(t('Item II.\n'))),
           li(p(t('Item III.\n')))),
        ol(li(p(t('Item i.\n'))),
           li(p(t('Item ii.\n'))),
           li(p(t('Item iii.\n')))),
      ],
    ],
    [
      'enumerated lists with bad roman numerals',
      `\
Bad Roman numerals:

i. i

ii. ii

iii. iii

iiii. iiii
      second line

(LCD) is an acronym made up of Roman numerals

(livid) is a word made up of Roman numerals

(CIVIL) is another such word

(I) I

(IVXLCDM) IVXLCDM
`,
      [
        p(t('Bad Roman numerals:\n')),
        ol(li(p(t('i\n'))),
           li(p(t('ii\n'))),
           li(p(t('iii\n')))),
        new DefinitionList({
          children: [
            new DefinitionListItem({
              term: new Term({ children: [t('iiii. iiii')] }),
              definition: new Definition({ children: [p(t('second line\n'))] }),
            }),
          ],
        }),
        p(t('(LCD) is an acronym made up of Roman numerals\n')),
        p(t('(livid) is a word made up of Roman numerals\n')),
        p(t('(CIVIL) is another such word\n')),
        ol(li(p(t('I\n')))),
        p(t('(IVXLCDM) IVXLCDM\n')),
      ],
    ],
    [
      'enumerated list with potentially ambiguous cases',
      `\
Potentially ambiguous cases:

A. Item A.
B. Item B.
C. Item C.

I. Item I.
II. Item II.
III. Item III.

a. Item a.
b. Item b.
c. Item c.

i. Item i.
ii. Item ii.
iii. Item iii.

Phew! Safe!
`,
      [
        p(t('Potentially ambiguous cases:\n')),
        ol(li(p(t('Item A.\n'))),
           li(p(t('Item B.\n'))),
           li(p(t('Item C.\n')))),
        ol(li(p(t('Item I.\n'))),
           li(p(t('Item II.\n'))),
           li(p(t('Item III.\n')))),
        ol(li(p(t('Item a.\n'))),
           li(p(t('Item b.\n'))),
           li(p(t('Item c.\n')))),
        ol(li(p(t('Item i.\n'))),
           li(p(t('Item ii.\n'))),
           li(p(t('Item iii.\n')))),
        p(t('Phew! Safe!\n')),
      ],
    ],
    [
      'enumerated lists with different enumeration formats',
      `\
Different enumeration formats:

1. Item 1.
2. Item 2.
3. Item 3.

1) Item 1).
2) Item 2).
3) Item 3).

(1) Item (1).
(2) Item (2).
(3) Item (3).
`,
      [
        p(t('Different enumeration formats:\n')),
        ol(li(p(t('Item 1.\n'))),
           li(p(t('Item 2.\n'))),
           li(p(t('Item 3.\n')))),
        ol(li(p(t('Item 1).\n'))),
           li(p(t('Item 2).\n'))),
           li(p(t('Item 3).\n')))),
        ol(li(p(t('Item (1).\n'))),
           li(p(t('Item (2).\n'))),
           li(p(t('Item (3).\n')))),
      ],
    ],
    [
      'nested enumerated lists',
      `\
Nested enumerated lists:

1. Item 1.

   A) Item A).
   B) Item B).
   C) Item C).

2. Item 2.

   (a) Item (a).

       I) Item I).
       II) Item II).
       III) Item III).

   (b) Item (b).

   (c) Item (c).

       (i) Item (i).
       (ii) Item (ii).
       (iii) Item (iii).

3. Item 3.
`,
      [
        p(t('Nested enumerated lists:\n')),
        ol(li(p(t('Item 1.\n')),
              ol(li(p(t('Item A).\n'))),
                 li(p(t('Item B).\n'))),
                 li(p(t('Item C).\n'))))),
           li(p(t('Item 2.\n')),
              ol(li(p(t('Item (a).\n')),
                    ol(li(p(t('Item I).\n'))),
                       li(p(t('Item II).\n'))),
                       li(p(t('Item III).\n'))))),
                 li(p(t('Item (b).\n'))),
                 li(p(t('Item (c).\n')),
                    ol(li(p(t('Item (i).\n'))),
                       li(p(t('Item (ii).\n'))),
                       li(p(t('Item (iii).\n'))))))),
           li(p(t('Item 3.\n')))),
      ],
    ],
    [
      'enumerated list with arabic number and auto enumerator "#"',
      `\
1. Item one.

#. Item two.

#. Item three.
`,
      [
        ol(li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
    [
      'enumerated list with alphabet and auto enumerator "#"',
      `\
a. Item one.
#. Item two.
#. Item three.
`,
      [
        ol(li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
    [
      'enumerated list with roman and auto enumerator "#"',
      `\
i. Item one.
ii. Item two.
#. Item three.
`,
      [
        ol(li(p(t('Item one.\n'))),
           li(p(t('Item two.\n'))),
           li(p(t('Item three.\n')))),
      ],
    ],
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
    [
      'enumerated list like paragraph',
      `\
z.
x
`,
      [p(t('z.\n'), t('x\n'))],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
