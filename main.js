import React from 'react';
import ReactDOM from 'react-dom';
import restructured from 'restructured';

const d = restructured.parse(`
タイトル
=======

こんにちは!こんにちは!
`);
console.log(JSON.stringify(d.toJSON()));

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('main')
);
