import { List, Record } from 'immutable';

export class Document extends new Record({
  type: 'document',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class Section extends new Record({
  type: 'section',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class Transition extends new Record({
  type: 'transition',
}) {
  constructor({ }) {
    super({ });
  }
}

export class Paragraph extends new Record({
  type: 'paragraph',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class BulletList extends new Record({
  type: 'bullet_list',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class ListItem extends new Record({
  type: 'list_item',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class DefinitionList extends new Record({
  type: 'definition_list',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class DefinitionListItem extends new Record({
  type: 'definition_list_item',
  term: null,
  classifiers: new List(),
  definition: null,
}) {
  constructor({ term, classifiers = [], definition }) {
    super({ term, classifiers: new List(classifiers), definition });
  }
}

// TODO(seikichi): implement non empty comment
export class Comment extends new Record({
  type: 'comment',
}) {
  constructor({ }) {
    super({ });
  }
}

export class Term extends new Record({
  type: 'term',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class Definition extends new Record({
  type: 'definition',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class BlockQuote extends new Record({
  type: 'block_quote',
  children: new List(),
  attribution: null,
}) {
  constructor({ children, attribution = null }) {
    super({ children: new List(children), attribution });
  }
}

export class Attribution extends new Record({
  type: 'attribution',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class Text extends new Record({
  type: 'text',
  text: null,
}) {
  constructor({ text }) { super({ text }); }
}

export class Emphasis extends new Record({
  type: 'emphasis',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class StrongEmphasis extends new Record({
  type: 'strong',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class InterpretedText extends new Record({
  type: 'interpreted_text',
  role: null,
  children: new List(),
}) {
  constructor({ children, role = null }) {
    super({ role, children: new List(children) });
  }
}

export class InlineLiteral extends new Record({
  type: 'literal',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class HyperlinkReference extends new Record({
  type: 'reference',
  children: new List(),
  simple: false,
  anonymous: false,
}) {
  constructor({ simple, anonymous, children }) {
    super({ simple, anonymous, children: new List(children) });
  }
}

export class InlineInternalTarget extends new Record({
  type: 'target',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class FootnoteReference extends new Record({
  type: 'footnote_reference',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class CitationReference extends new Record({
  type: 'citation_reference',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class SubstitutionReference extends new Record({
  type: 'substitution_reference',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}
