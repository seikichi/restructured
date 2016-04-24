import _ from 'lodash';
import {
  BulletList,
  BlockQuote,
  Classifier,
  Definition,
  DefinitionList,
  DefinitionListItem,
  Emphasis,
  EnumeratedList,
  InlineLiteral,
  ListItem,
  LiteralBlock,
  LiteralBlockLine,
  Paragraph,
  Section,
  SectionTitle,
  StrongEmphasis,
  Term,
  Text,
  Transition,
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

export function classifier(...children) {
  return new Classifier({ children });
}

export function dli(...children) {
  const term = children[0];
  const definition = children[children.length - 1];
  const classifiers = children.slice(1, children.length - 1);
  return new DefinitionListItem({ term, classifiers, definition });
}

export function dl(...children) {
  return new DefinitionList({ children });
}

export function pre(...children) {
  return new LiteralBlock({ children: _.map(children, text => new LiteralBlockLine({ text })) });
}

export function section(...args) {
  return new Section({ title: args[0], children: args.slice(1) });
}

export function title(...children) {
  return new SectionTitle({ children });
}

export function blockquote(...children) {
  return new BlockQuote({ children });
}

export function transition() {
  return new Transition({ });
}
