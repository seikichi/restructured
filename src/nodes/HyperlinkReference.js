class HyperlinkReference {
  constructor({ children, simple, anonymous }) {
    this.type = 'hyperlink_reference';
    this.children = children;
    this.simple = simple;
    this.anonymous = anonymous;
  }
}

export default HyperlinkReference;
