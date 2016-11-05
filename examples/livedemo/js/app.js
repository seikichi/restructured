import React from 'react';
import ReactDOM from 'react-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App';

const text = `
=====
Title
=====

This is a paragraph.

Paragraphs contain text and may contain inline markup: *emphasis*, **strong emphasis**, \`\`inline literals\`\`.

Bullet Lists
------------

- A bullet list

  - Nested bullet list
  - Nested item 2.

- Item 2.

  Paragraph 2 of item 2.

  - Nested bullet list.

Enumerated Lists
----------------

1. A enumerated list
2. Item 2.

Definition Lists
----------------

Term
  Definition

Term
  Definition paragraph 1.

  Definition paragraph 2.

Literal Blocks
--------------

::

  console.log('Hello, world!');

Line Blocks
-----------

| A one, two, a one two three four
|
| Half a bee, philosophically,
|   must, ipso facto, half not be.

Block Quotes
------------

Block quotes consist of indented body elements:

  My theory by A. Elk. Brackets Miss, brackets.
  This theory goes as follows and begins now.
  All brontosauruses are thin at one end, much much thicker in the middle and then thin again at the far end.
  That is my theory, it is mine, and belongs to me and I own it, and what it is too.
`;

ReactDOM.render(<App text={text} />, document.getElementById('main'));
