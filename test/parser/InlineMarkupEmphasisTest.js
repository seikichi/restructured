import { assertNode, p, t, em } from '../TestUtils';

const emphasis = em(t('emphasis'));

describe('RST.parse', () => {
  [
    [
      'an emphasis',
      '*emphasis*\n',
      [p(emphasis, t('\n'))],
    ],
    [
      'multiple emphasis',
      `\
l'*emphasis* with the *emphasis*' apostrophe.
l\u2019*emphasis* with the *emphasis*\u2019 apostrophe.
`,
      [
        p(t('l\''), emphasis, t(' with the '), emphasis, t('\' apostrophe.\n'),
          t('l\u2019'), emphasis, t(' with the '), emphasis, t('\u2019 apostrophe.\n')),
      ],
    ],
    [
      'emphasized sentence across line',
      `\
*emphasized sentence
across lines*
`,
      [p(em(t('emphasized sentence\n'), t('across lines')), t('\n'))],
    ],
    [
      'emphasis with punctuation',
      `\
some punctuation is allowed around inline markup, e.g.
/*emphasis*/, -*emphasis*-, and :*emphasis*: (delimiters),
(*emphasis*), [*emphasis*], <*emphasis*>, {*emphasis*} (open/close pairs)
*emphasis*., *emphasis*,, *emphasis*!, and *emphasis* (closing delimiters),

but not
)*emphasis*(, ]*emphasis*[, >*emphasis*>, }*emphasis*{ (close/open pairs),
(*), [*], '*' or '"*"' ("quoted" start-string),
x*2* or 2*x* (alphanumeric char before),
\\*args or * (escaped, whitespace behind start-string),
or *the\\* *stars\\* *inside* (escaped, whitespace before end-string).

what about *this**?
`,
      [
        p(t('some punctuation is allowed around inline markup, e.g.\n'),
          t('/'), emphasis, t('/, -'), emphasis,
          t('-, and :'), emphasis, t(': (delimiters),\n'),
          t('('), emphasis, t('), ['), emphasis,
          t('], <'), emphasis, t('>, {'), emphasis, t('} (open/close pairs)\n'),
          emphasis, t('., '), emphasis, t(',, '), emphasis,
          t('!, and '), emphasis, t(' (closing delimiters),\n')),
        p(t('but not\n'),
          t(')*emphasis*(, ]*emphasis*[, >*emphasis*>, }*emphasis*{ (close/open pairs),\n'),
          t('(*), [*], \'*\' or \'"*"\' ("quoted" start-string),\n'),
          t('x*2* or 2*x* (alphanumeric char before),\n'),
          t('\\*args or * (escaped, whitespace behind start-string),\n'),
          t('or '), em(t('the\\* *stars\\* *inside')),
          t(' (escaped, whitespace before end-string).\n')),
        p(t('what about '), em(t('this*')), t('?\n')),
      ],
    ],
    [
      'quotes around inline markup',
      `\
Quotes around inline markup:

'*emphasis*' "*emphasis*" Straight,
`,
      [
        p(t('Quotes around inline markup:\n')),
        p(t('\''), emphasis, t('\' "'), emphasis, t('" Straight,\n')),
      ],
    ],
    [
      'emphasized asterisk',
      `\
Emphasized asterisk: *\\**

Emphasized double asterisk: *\\***
`,
      [
        p(t('Emphasized asterisk: '), em(t('\\*')), t('\n')),
        p(t('Emphasized double asterisk: '), em(t('\\**')), t('\n')),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => assertNode(input, children));
  });
});
