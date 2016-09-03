import _ from 'lodash';
import { List, Record } from 'immutable';
import ParserUtil from './ParserUtil';

const emptyList = new List();
const elementValues = {
  _location: undefined,
};

function element(type, options = {}) {
  const values = _.extend({ type }, elementValues, options);
  class Element extends new Record(values) {
    constructor(params) {
      const p = _.pick(params, _.keys(values));
      p.children = new List(p.children);
      super(p);
    }

    location(locationFn, { location = false }) {
      if (!location) {
        return this;
      }
      return this.set('_location', locationFn());
    }
  }
  return Element;
}

export class Document extends element('document', { children: emptyList }) { }
export class SectionTitle extends element('title', { children: emptyList }) { }
export class Section extends element('section', { children: emptyList }) { }
export class Transition extends element('transition') { }
export class Unknown extends element('unknown', { children: emptyList }) { }

export class Paragraph extends element('paragraph', { children: emptyList }) { }
export class LiteralBlock extends element('literal_block', { children: emptyList }) { }
export class LiteralBlockLine extends element('literal_block_line', { children: emptyList }) { }
export class BulletList extends element('bullet_list', { children: emptyList }) { }
export class EnumeratedList extends element('enumerated_list', { children: emptyList }) { }
export class ListItem extends element('list_item', { children: emptyList }) { }
export class DefinitionList extends element('definition_list', { children: emptyList }) { }
export class DefinitionListItem extends element('definition_list_item', {
  term: null,
  classifiers: emptyList,
  definition: null,
}) { }
export class Comment extends element('comment', { children: emptyList }) { }
export class Term extends element('term', { children: emptyList }) { }
export class Classifier extends element('classifier', { children: emptyList }) { }
export class Definition extends element('definition', { children: emptyList }) { }
export class BlockQuote extends element('block_quote', {
  children: emptyList,
  attribution: null,
}) { }
export class Attribution extends element('attribution', { children: emptyList }) { }
export class Text extends element('text', { children: emptyList, text: null }) { }
export class Emphasis extends element('emphasis', { children: emptyList }) { }
export class StrongEmphasis extends element('strong', { children: emptyList }) { }
export class InterpretedText extends element('interpreted_text', {
  role: null,
  children: emptyList,
}) { }
export class InlineLiteral extends element('literal', { children: emptyList }) { }
export class HyperlinkReference extends element('reference', {
  children: emptyList,
  simple: false,
  anonymous: false,
}) { }
export class InlineInternalTarget extends element('target', { children: emptyList }) { }
export class FootnoteReference extends element('footnote_reference', { children: emptyList }) { }
export class CitationReference extends element('citation_reference', { children: emptyList }) { }
export class SubstitutionReference extends element('substitution_reference', {
  children: emptyList,
}) { }

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
