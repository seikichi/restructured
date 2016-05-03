import React from 'react';
import ReST from './ReST';

export default function ReSTDocument({ element, level }) {
  const children = element.children.map((e, key) => new ReST({ element: e, level, key })).toArray();
  return <div>{children}</div>;
}
