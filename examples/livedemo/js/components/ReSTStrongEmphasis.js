import React from 'react';
import ReST from './ReST';

export default function ReSTStrongEmphasis({ element, level, key }) {
  const children = element.children.map((e, key) => new ReST({ element: e, level, key })).toArray();
  return <strong key={key}>{children}</strong>;
}
