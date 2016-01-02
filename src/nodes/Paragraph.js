import Parser from '../Parser';

class Paragraph {
  constructor({ children }) {
    this.type = 'paragraph';
    this.children = children;
  }

  static parse(s) {
    return Parser.parse(s, { startRule: 'Paragraph' });
  }
}

export default Paragraph;
