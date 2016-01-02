class InterpretedText {
  constructor({ text, role }) {
    this.type = 'interpreted_text';
    this.text = text;
    this.role = role;
  }
}

export default InterpretedText;
