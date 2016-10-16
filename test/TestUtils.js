import _ from 'lodash';
import assert from 'power-assert';
import removePosition from 'unist-util-remove-position';
import RST from '../lib/RST';
import Elements from '../lib/Elements';

export function assertNode(input, children) {
  const actual = removePosition(new Elements.Document({ children }), true);
  assert.deepStrictEqual(RST.parse(input), actual);
}

export function p(...children) {
  return new Elements.Paragraph({ children });
}

export function ul(...children) {
  if (_.isString(children[0])) {
    return new Elements.BulletList({ bullet: children[0], children: children.slice(1) });
  }
  return new Elements.BulletList({ bullet: '-', children });
}

export function ol(...children) {
  return new Elements.EnumeratedList({ children });
}

export function li(...children) {
  return new Elements.ListItem({ children });
}

export function t(value) {
  return new Elements.Text({ value });
}

export function em(...children) {
  return new Elements.Emphasis({ children });
}

export function strong(...children) {
  return new Elements.Strong({ children });
}

export function tt(...children) {
  return new Elements.Literal({ children });
}

export function dt(...children) {
  return new Elements.Term({ children });
}

export function dd(...children) {
  return new Elements.Definition({ children });
}

export function classifier(...children) {
  return new Elements.Classifier({ children });
}

export function dli(...children) {
  return new Elements.DefinitionListItem({ children });
}

export function dl(...children) {
  return new Elements.DefinitionList({ children });
}

export function pre(...children) {
  return new Elements.LiteralBlock({
    children: _.map(children, value => new Elements.Text({ value })),
  });
}

export function section(...children) {
  return new Elements.Section({ children });
}

export function title(...children) {
  return new Elements.Title({ children });
}

export function blockquote(...children) {
  return new Elements.BlockQuote({ children });
}

export function attribution(...children) {
  return new Elements.Attribution({ children });
}

export function transition() {
  return new Elements.Transition({ });
}

export function comment(...children) {
  return new Elements.Comment({ children });
}

export function line(...children) {
  return new Elements.Line({ children });
}

export function lineblock(...children) {
  return new Elements.LineBlock({ children });
}

export function interpreted(...children) {
  if (_.isString(children[0])) {
    return new Elements.InterpretedText({ role: children[0], children: children.slice(1) });
  }
  return new Elements.InterpretedText({ children });
}
