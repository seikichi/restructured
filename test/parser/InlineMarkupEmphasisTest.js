import assert from 'power-assert';
import RST from '../../lib/RST';
import {
  Document,
  Emphasis,
  Paragraph,
  Text,
} from '../../lib/Elements';

const emphasis = new Emphasis({ children: [new Text({ text: 'emphasis' })] });
const newline = new Text({ text: '\n' });
function text(s) {
  return new Text({ text: s });
}

describe('RST.parse', () => {
  [
    [
      'an emphasis',
      '*emphasis*\n',
      [new Paragraph({ children: [emphasis, newline] })],
    ],
    [
      'multiple emphasis',
      `\
l'*emphasis* with the *emphasis*' apostrophe.
l\u2019*emphasis* with the *emphasis*\u2019 apostrophe.
`,
      [
        new Paragraph({
          children: [
            text('l\''), emphasis, text(' with the '), emphasis, text('\' apostrophe.\n'),
            text('l\u2019'), emphasis, text(' with the '), emphasis, text('\u2019 apostrophe.\n'),
          ],
        }),
      ],
    ],
    [
      'emphasized sentence across line',
      `\
*emphasized sentence
across lines*
`,
      [
        new Paragraph({
          children: [
            new Emphasis({
              children: [text('emphasized sentence\n'), text('across lines')],
            }),
            newline,
          ],
        }),
      ],
    ],
    [
      'emphasis with punctuation',
      `\
some punctuation is allowed around inline markup, e.g.
/*emphasis*/, -*emphasis*-, and :*emphasis*: (delimiters),
(*emphasis*), [*emphasis*], <*emphasis*>, {*emphasis*} (open/close pairs)
*emphasis*., *emphasis*,, *emphasis*!, and *emphasis*\ (closing delimiters),

but not
)*emphasis*(, ]*emphasis*[, >*emphasis*>, }*emphasis*{ (close/open pairs),
(*), [*], '*' or '"*"' ("quoted" start-string),
x*2* or 2*x* (alphanumeric char before),
\\*args or * (escaped, whitespace behind start-string),
or *the\\* *stars\\* *inside* (escaped, whitespace before end-string).

what about *this**?
`,
      [
        new Paragraph({
          children: [
            text('some punctuation is allowed around inline markup, e.g.\n'),
            text('/'), emphasis, text('/, -'), emphasis,
            text('-, and :'), emphasis, text(': (delimiters),\n'),
            text('('), emphasis, text('), ['), emphasis,
            text('], <'), emphasis, text('>, {'), emphasis, text('} (open/close pairs)\n'),
            emphasis, text('., '), emphasis, text(',, '), emphasis,
            text('!, and '), emphasis, text('\ (closing delimiters),\n'),
          ],
        }),
        new Paragraph({
          children: [
            text('but not\n'),
            text(')*emphasis*(, ]*emphasis*[, >*emphasis*>, }*emphasis*{ (close/open pairs),\n'),
            text('(*), [*], \'*\' or \'"*"\' ("quoted" start-string),\n'),
            text('x*2* or 2*x* (alphanumeric char before),\n'),
            text('\\*args or * (escaped, whitespace behind start-string),\n'),
            text('or '),
            new Emphasis({ children: [text('the\\* *stars\\* *inside')] }),
            text(' (escaped, whitespace before end-string).\n'),
          ],
        }),
        new Paragraph({
          children: [
            text('what about '),
            new Emphasis({ children: [text('this*')] }),
            text('?\n'),
          ],
        }),
      ],
    ],
    [
      'quotes around inline markup',
      `\
Quotes around inline markup:

'*emphasis*' "*emphasis*" Straight,
`,
      [
        new Paragraph({ children: [text('Quotes around inline markup:\n')] }),
        new Paragraph({
          children: [
            text('\''), emphasis, text('\' "'), emphasis, text('" Straight,\n'),
          ],
        }),
      ],
    ],
    [
      'emphasized asterisk',
      `\
Emphasized asterisk: *\\**

Emphasized double asterisk: *\\***
`,
      [
        new Paragraph({
          children: [
            text('Emphasized asterisk: '),
            new Emphasis({ children: [text('\\*')] }),
            newline,
          ],
        }),
        new Paragraph({
          children: [
            text('Emphasized double asterisk: '),
            new Emphasis({ children: [text('\\**')] }),
            newline,
          ],
        }),
      ],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => {
      assert.deepStrictEqual(RST.parse(input).toJS(), new Document({ children }).toJS());
    });
  });
});
