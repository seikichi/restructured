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

Subtitle
--------

This is a paragraph.

- This is item 1
- This is item 2
`;

ReactDOM.render(<App text={text} />, document.getElementById('main'));
