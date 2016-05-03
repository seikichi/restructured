import React from 'react';
import ReST from './ReST';

export default function ReSTParagraph({ element, level, key }) {
  const children = element.children.map((e, key) => new ReST({ element: e, level, key })).toArray();
  return <blockquote key={key}>{children}</blockquote>;
}
