class HyperlinkReference {
  constructor({ text, simple, anonymous }) {
    this.type = 'hyperlink_reference';
    this.text = text;
    this.simple = simple;
    this.anonymous = anonymous;
  }
}

export default HyperlinkReference;
