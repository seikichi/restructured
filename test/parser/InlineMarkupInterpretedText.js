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
  ].forEach(([title, input, children]) => {
    it(`should parse ${title} correctly`, () => assertNode(input, children));
  });
});
