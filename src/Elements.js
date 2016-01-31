import { List, Record } from 'immutable';
import ParserUtil from './ParserUtil';

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

export class LiteralBlock extends new Record({
  type: 'literal_block',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class LiteralBlockLine extends new Record({
  type: 'literal_block_line',
  text: '',
}) {
  constructor({ text }) {
    super({ text });
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

export class EnumeratedList extends new Record({
  type: 'enumerated_list',
  children: new List(),
}) {
  constructor({ children }) {
    super({ children: new List(children) });
  }
}

export class EnumeratorSequence extends new Record({
  type: '',
  value: '',
}) {
  constructor({ type, value }) {
    super({ type, value });
  }

  width() {
    return this.value.length;
  }

  isAuto() {
    return this.type === 'auto';
  }

  isArabicNumerals() {
    return this.type === 'arabic_numerals';
  }

  isUppercaseAlphabet() {
    return this.type === 'uppercase_alphabet';
  }

  isLowercaseAlphabet() {
    return this.type === 'lowercase_alphabet';
  }

  isUppercaseRoman() {
    return this.type === 'uppercase_roman';
  }

  isLowercaseRoman() {
    return this.type === 'lowercase_roman';
  }
}

export class Enumerator extends new Record({
  type: 'enumerator',
  sequence: '',
  format: '',
}) {
  constructor({ sequence, format }) {
    super({ sequence, format });
  }

  width() {
    if (this.format === 'parentheses') {
      return this.sequence.width() + 2;
    }
    return this.sequence.width() + 1;
  }

  isPeriodFormat() {
    return this.format === 'period';
  }

  isParenthesesFormat() {
    return this.format === 'parentheses';
  }

  isRightParenthesisFormat() {
    return this.format === 'right_parenthesis';
  }

  isNext(e) {
    if (this.format !== e.format) {
      return false;
    } else if (e.sequence.isAuto()) {
      return true;
    } else if (this.sequence.type !== e.sequence.type) {
      return false;
    } else if (this.sequence.isArabicNumerals()) {
      return parseInt(this.sequence.value, 10) + 1 === parseInt(e.sequence.value, 10);
    } else if (this.sequence.isUppercaseAlphabet() || this.sequence.isLowercaseAlphabet()) {
      return this.sequence.value.charCodeAt(0) + 1 === e.sequence.value.charCodeAt(0);
    } else if (this.sequence.isUppercaseRoman() || this.sequence.isLowercaseRoman()) {
      return ParserUtil.romanToNumber(this.sequence.value.toUpperCase()) + 1 ===
        ParserUtil.romanToNumber(e.sequence.value.toUpperCase());
    }
    return true; // auto
  }

  isFirst() {
    if (this.sequence.isUppercaseRoman() || this.sequence.isLowercaseRoman()) {
      const value = this.sequence.value;
      return value === 'i' || value === 'I' || value.length === 2;
    }
    return true;
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

export class Classifier extends new Record({
  type: 'classifier',
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
