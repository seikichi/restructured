import {
  BulletList,
  Emphasis,
  EnumeratedList,
  ListItem,
  Paragraph,
  StrongEmphasis,
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
