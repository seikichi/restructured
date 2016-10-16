import _ from 'lodash';
import Type from './Type';
import ParserUtil from './ParserUtil';

const Elements = {};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

_.forEach(Type.valueTypes, (type, name) => {
  Elements[capitalize(name)] = class {
    constructor({ value, position }) {
      this.type = type;
      this.value = value;
      this.position = position;
    }
  };
});

_.forEach(Type.parentTypes, (type, name) => {
  Elements[capitalize(name)] = class {
    constructor({
      children = [],
      position,
      blanklines = [],
      bullet = null,
      depth = null,
      role = null,
    }) {
      this.type = type;

      if (type === 'bullet_list') {
        this.bullet = bullet;
      }
      if (type === 'interpreted_text') {
        this.role = role;
      }
      if (type === 'section') {
        this.depth = depth;
      }

      this.position = position;
      this.blanklines = blanklines || [];
      this.children = children;
    }
  };
});

Elements.EnumeratorSequence = class {
  constructor({ type, value }) {
    this.type = type;
    this.value = value;
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
};

Elements.Enumerator = class {
  constructor({ sequence, format }) {
    this.sequence = sequence;
    this.format = format;
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
};

export default Elements;
