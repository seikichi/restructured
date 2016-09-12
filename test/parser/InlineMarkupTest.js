import { p, t, assertNode } from '../TestUtils';

describe('RST.parse', () => {
  context('when inline markup string does not exist', () => {
    [
      '2*x a**b O(N**2) e**(x*y) f(x)*f(y) a|b file*.*\n',
      '2 * x a ** b (* BOM32_* ` `` _ __ |\n',
      '"*" \'|\' (*) [*] {*} <*> ‘*’ ‚*‘ ‘*‚ ’*’ ‚*’ “*” „*“ “*„ ”*” „*” »*« ›*‹ «*» »*» ›*›\n',
      '||\n',
      '__init__ __init__()\n',
      '2*x a**b O(N**2) e**(x*y) f(x)*f(y) a*(1+2)\n',
    ].forEach(text => {
      it(`should parse ${text} correctly`, () => assertNode(text, [p(t(text))]));
    });
  });
});
