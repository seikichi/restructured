import React from 'react';
import ReactDOM from 'react-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App';

const text = `
タイトル
========

ぽよ
----

こんにちは!こんにちは!
`;


ReactDOM.render(<App text={text} />, document.getElementById('main'));
