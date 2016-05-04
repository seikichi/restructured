# restructured

[![Build Status](https://travis-ci.org/seikichi/restructured.svg?branch=master)](https://travis-ci.org/seikichi/restructured)

A reStructuredText parser for JavaScript.

## Online Demo

[demo](https://seikichi.github.io/restructured/).

## Example

Consider the following script.

```javascript
import restructured from 'restructured';

const parsed = rst.parse(`
=====
Title
=====

Subtitle
--------

This is a paragraph.

- This is item 1
- This is item 2
`);

console.log(JSON.stringify(parsed));
```

The above script outputs the following JSON.

```json
{
  "type": "document",
  "children": [
    {
      "type": "section",
      "title": {
        "type": "title",
        "children": [
          {
            "type": "text",
            "text": "Title"
          }
        ]
      },
      "children": [
        {
          "type": "section",
          "title": {
            "type": "title",
            "children": [
              {
                "type": "text",
                "text": "Subtitle"
              }
            ]
          },
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "text",
                  "text": "This is a paragraph.\n"
                }
              ]
            },
            {
              "type": "bullet_list",
              "children": [
                {
                  "type": "list_item",
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "text",
                          "text": "This is item 1\n"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "list_item",
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "text",
                          "text": "This is item 2\n"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Progress

- [ ] Document Structure
  - [x] Document
  - [x] Sections
  - [x] Transitions
- [ ] Body Elements
  - [x] Paragraphs
  - [x] Bullet Lists
  - [x] Enumerated Lists
  - [x] Definition Lists
  - [ ] Field Lists
    - [ ] Bibliographic Fields
    - [ ] RCS Keywords
  - [ ] Option Lists
  - [ ] Literal Blocks
    - [ ] Indented Literal Blocks
    - [ ] Quoted Literal Blocks
  - [ ] Line Blocks
  - [x] Block Quotes
  - [ ] Doctest Blocks
  - [ ] Tables
    - [ ] Grid Tables
    - [ ] Simple Tables
  - [ ] Explicit Markup Blocks
    - [ ] Footnotes
      - [ ] Auto-Numbered Footnotes
      - [ ] Auto-Symbol Footnotes
      - [ ] Mixed Manual and Auto-Numbered Footnotes
    - [ ] Citations
    - [ ] Hyperlink Targets
      - [ ] Anonymous Hyperlinks
    - [ ] Directives
    - [ ] Substitution Definitions
    - [ ] Comments
- [ ] Implicit Hyperlink Targets
- [ ] Inline Markup
  - [x] Emphasis
  - [x] Strong Emphasis
  - [ ] Interpreted Text
  - [x] Inline Literals
  - [ ] Hyperlink References
    - [ ] Embedded URIs and Aliases
  - [ ] Inline Internal Targets
  - [ ] Footnote References
  - [ ] Citation References
  - [ ] Substitution References
  - [ ] Standalone Hyperlinks

## License

MIT
