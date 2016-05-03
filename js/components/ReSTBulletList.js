import React from 'react';
import ReST from './ReST';

export default function ReSTBulletList({ element, level, key }) {
  const children = element.children.map((e, key) => new ReST({ element: e, level, key })).toArray();
  return <ul key={key}>{children}</ul>;
}
