import _ from 'lodash';
import { List, Record } from 'immutable';
import ParserUtil from './ParserUtil';

const emptyList = new List();
const listKeys = ['children', 'classifiers'];

function node(type, values = {}) {
  const valuesWithType = _.assign({
    type,
    loc: undefined,
  }, values);

  class Node extends new Record(valuesWithType) {
    constructor(params) {
      const p = _.pick(params, _.keys(values));
      _.forEach(listKeys, k => {
        if (!p[k]) { return; }
        p[k] = new List(p[k]);
      });
      super(p);
    }

    withLoc(locFn, options) {
      if (!options.loc) { return this; }
      return this.set('loc', locFn());
    }

    withBullet(bullet, options) {
      if (!options.bullet) { return this; }
      return this.set('bullet', bullet);
    }
  }
  return Node;
}

export const Document = node('document', { children: emptyList });
export const SectionTitle = node('title', { children: emptyList });
export const Section = node('section', { children: emptyList });
export const Transition = node('transition');
export const Unknown = node('unknown', { children: emptyList });
export const Paragraph = node('paragraph', { children: emptyList });
export const LiteralBlock = node('literal_block', { children: emptyList });
export const LiteralBlockLine = node('literal_block_line', { children: emptyList });
export const BulletList = node('bullet_list', { children: emptyList });
export const EnumeratedList = node('enumerated_list', { children: emptyList });
export const ListItem = node('list_item', { bullet: undefined, children: emptyList });
export const DefinitionList = node('definition_list', { children: emptyList });
export const DefinitionListItem = node('definition_list_item', {
  term: null,
  classifiers: emptyList,
  definition: null,
});
export const Comment = node('comment', { children: emptyList });
export const Term = node('term', { children: emptyList });
export const Classifier = node('constifier', { children: emptyList });
export const Definition = node('definition', { children: emptyList });
export const BlockQuote = node('block_quote', {
  children: emptyList,
  attribution: null,
});
export const Attribution = node('attribution', { children: emptyList });
export const Text = node('text', { text: null });
export const Emphasis = node('emphasis', { children: emptyList });
export const StrongEmphasis = node('strong', { children: emptyList });
export const InterpretedText = node('interpreted_text', { role: null, children: emptyList });
export const InlineLiteral = node('literal', { children: emptyList });
export const HyperlinkReference = node('reference', {
  children: emptyList,
  simple: false,
  anonymous: false,
});
export const InlineInternalTarget = node('target', { children: emptyList });
export const FootnoteReference = node('footnote_reference', { children: emptyList });
export const CitationReference = node('citation_reference', { children: emptyList });
export const SubstitutionReference = node('substitution_reference', { children: emptyList });

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
