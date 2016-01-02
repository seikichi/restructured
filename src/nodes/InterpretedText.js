class InterpretedText {
  constructor({ role, children }) {
    this.type = 'interpreted_text';
    this.role = role;
    this.children = children;
  }
}

export default InterpretedText;
