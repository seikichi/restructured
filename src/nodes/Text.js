class Text {
  constructor({ text, indent = undefined }) {
    this.type = 'text';
    this.text = text;
    this.indent = indent;
  }
}

export default Text;
