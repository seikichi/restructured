class Section {
  constructor({ title, overline = null, underline }) {
    this.type = 'section';
    this.title = title;
    this.overline = overline;
    this.underline = underline;
  }
}

export default Section;
