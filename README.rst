############
restructured
############

.. image:: https://travis-ci.org/seikichi/restructured.svg?branch=master
   :target: https://travis-ci.org/seikichi/restructured

作りかけ．

A reStructuredText parser for JavaScript.

Example
=======

Consider the following script.

.. code:: javascript

   var rst = require('restructured')

   var document = rst.parse([
     '#######',
     ' Title ',
     '#######',
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
               "text": "Title"
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
  - ✓ Bullet Lists
  - ✓ Enumerated Lists
  - ✓ Definition Lists
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
