import {
  BulletList,
  Definition,
  DefinitionList,
  DefinitionListItem,
  Emphasis,
  EnumeratedList,
  InlineLiteral,
  ListItem,
  Paragraph,
  StrongEmphasis,
  Term,
  Text,
} from '../lib/Elements';

export function p(...children) {
  return new Paragraph({ children });
}

export function ul(...children) {
  return new BulletList({ children });
}

export function ol(...children) {
  return new EnumeratedList({ children });
}

export function li(...children) {
  return new ListItem({ children });
}

export function t(text) {
  return new Text({ text });
}

export function em(...children) {
  return new Emphasis({ children });
}

export function strong(...children) {
  return new StrongEmphasis({ children });
}

export function tt(...children) {
  return new InlineLiteral({ children });
}

export function dt(...children) {
  return new Term({ children });
}

export function dd(...children) {
  return new Definition({ children });
}

export function dli(term, definition) {
  return new DefinitionListItem({ term, definition });
}

export function dl(...children) {
  return new DefinitionList({ children });
}
