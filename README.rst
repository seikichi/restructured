######
rst.js
######

作りかけ．

A reStructuredText parser for JavaScript.

Example
=======

::

   % cat <<'EOF' > sample.rst
   Paragraphs contain text and may contain inline markup:
   *emphasis*, **strong emphasis**, `interpreted text`, ``inline
   literals``, standalone hyperlinks (http://www.python.org),
   external hyperlinks (Python_), internal cross-references
   (example_), footnote references ([1]_), citation references
   ([CIT2002]_), substitution references (|example|), and _`inline
   internal targets`.

   Paragraphs are separated by blank lines and are left-aligned.
   EOF
   % cat <<'EOF' > sample.js
   var RST = require('RST').default;
   var fs = require('fs');

   var text = fs.readFileSync('/dev/stdin').toString();
   console.log(JSON.stringify(RST.parse(text)));
   EOF
   % node sample.js < sample.rst | jq .
   {
     "type": "document",
     "children": [
       {
         "type": "paragraph",
         "children": [
           [
             {
               "type": "text",
               "text": "Paragraphs contain text and may contain inline markup:\n"
             },
             {
               "type": "emphasis",
               "text": "emphasis"
             }
           ],
           [
             {
               "type": "text",
               "text": ", "
             },
             {
               "type": "strong_emphasis",
               "text": "strong emphasis"
             }
           ],
   ...


Progress
========

- Document Structure

  - ✓ Document
  - ✓ Sections
  - ✓ Transitions

- Body Elements

  - ✓ Paragraphs
  - Bullet Lists
  - Enumerated Lists
  - Definition Lists
  - Field Lists

    - Bibliographic Fields
    - RCS Keywords

  - Option Lists
  - Literal Blocks

    - Indented Literal Blocks
    - Quoted Literal Blocks

  - Line Blocks
  - Block Quotes
  - Doctest Blocks
  - Tables

    - Grid Tables
    - Simple Tables

  - Explicit Markup Blocks

    - Footnotes

      - Auto-Numbered Footnotes
      - Auto-Symbol Footnotes
      - Mixed Manual and Auto-Numbered Footnotes

    - Citations
    - Hyperlink Targets

      - Anonymous Hyperlinks

    - Directives
    - Substitution Definitions
    - Comments

- Implicit Hyperlink Targets
- Inline Markup

  - ✓ Emphasis
  - ✓ Strong Emphasis
  - ✓ Interpreted Text
  - ✓ Inline Literals
  - ✓ Hyperlink References

    - Embedded URIs and Aliases

  - ✓ Inline Internal Targets
  - ✓ Footnote References
  - ✓ Citation References
  - ✓ Substitution References
  - Standalone Hyperlinks
