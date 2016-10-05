import { p, t, interpreted, assertNode } from '../TestUtils';

describe('RST.parse', () => {
  [
    [
      'an interpreted text without role',
      '`interpreted`',
      [p(interpreted(t('interpreted')))],
    ],
    [
      'an interpreted text with role',
      ':title:`interpreted`',
      [p(interpreted('title', t('interpreted')))],
    ],
    [
      'interpreted texts',
      '`foo` :x:`bar` :x:y',
      [p(interpreted(t('foo')), t(' '), interpreted('x', t('bar')), t(' :x:y'))],
    ],
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => assertNode(input, children));
  });
});
