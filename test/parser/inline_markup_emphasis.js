import assert from 'power-assert';
import RST from '../../lib/RST';
import {
  Document,
  Emphasis,
  Paragraph,
  Text,
} from '../../lib/Elements';

describe('RST.parse', () => {
  [
    [
      'an emphasis',
      '*emphasis*\n',
      [
        new Paragraph({
          children: [
            new Emphasis({ children: [new Text({ text: 'emphasis' })] }),
            new Text({ text: '\n' }),
          ],
        }),
      ],
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
            new Text({ text: 'l\'' }),
            new Emphasis({ children: [new Text({ text: 'emphasis' })] }),
            new Text({ text: ' with the ' }),
            new Emphasis({ children: [new Text({ text: 'emphasis' })] }),
            new Text({ text: '\' apostrophe.\n' }),
            new Text({ text: 'l\u2019' }),
            new Emphasis({ children: [new Text({ text: 'emphasis' })] }),
            new Text({ text: ' with the ' }),
            new Emphasis({ children: [new Text({ text: 'emphasis' })] }),
            new Text({ text: '\u2019 apostrophe.\n' }),
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
