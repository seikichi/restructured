import React from 'react';
import ReST from './ReST';

export default function ReSTEnumeratedList({ element, level, key }) {
  const children = element.children.map((e, key) => new ReST({ element: e, level, key })).toArray();
  return <ol key={key}>{children}</ol>;
}
