######
rst.js
######

作りかけ．

A reStructuredText parser for JavaScript.

Example
=======

Consider the following script.

.. code:: javascript

   var RST = require('RST.js').default;

   var document = RST.parse([
     '########',
     ' rst.js ',
     '########',
     '',
     '**作りかけです!!**'
   ].join('\n'));

   console.log(JSON.stringify(document));

The above script outputs following JSON.

.. code:: json

   {
     "type": "document",
     "children": [
       {
         "type": "section",
         "title": [
           [
             {
               "type": "text",
               "text": "rst.js "
             }
           ]
         ],
         "overline": {
           "line": "########"
         },
         "underline": {
           "line": "########"
         }
       },
       {
         "type": "paragraph",
         "children": [
           {
             "type": "strong_emphasis",
             "text": "作りかけです!!"
           }
         ]
       }
     ]
   }

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
  - ✓ Block Quotes
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
