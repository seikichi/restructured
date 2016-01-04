import assert from 'power-assert';
import RST from '../../lib/RST';
import { Document, Paragraph, Text } from '../../lib/Elements';

describe('RST.parse', () => {
  context('when inline markup string does not exist', () => {
    [
      '2*x a**b O(N**2) e**(x*y) f(x)*f(y) a|b file*.*\n',
      '2 * x a ** b (* BOM32_* ` `` _ __ |\n',
      '"*" \'|\' (*) [*] {*} <*> ‘*’ ‚*‘ ‘*‚ ’*’ ‚*’ “*” „*“ “*„ ”*” „*” »*« ›*‹ «*» »*» ›*›\n',
      '||\n',
      '__init__ __init__()\n',
      '2 * x *a **b *.txt\n',
      '2*x a**b O(N**2) e**(x*y) f(x)*f(y) a*(1+2)\n',
    ].forEach(text => {
      it(`should parse ${text} correctly`, () => {
        const expected = new Document({
          children: [new Paragraph({ children: [new Text({ text })] })],
        }).toJS();
        assert.deepStrictEqual(RST.parse(text).toJS(), expected);
      });
    });
  });
});
