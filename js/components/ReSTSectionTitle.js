import React from 'react';

export default function ReSTSectionTitle({ element, level, key }) {
  const Tag = `h${level}`;
  const text = element.children.map(t => t.text).toArray().join('');
  return <Tag key={key}>{text}</Tag>;
}
