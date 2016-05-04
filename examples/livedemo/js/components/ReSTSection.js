import React from 'react';
import ReST from './ReST';
import ReSTSectionTitle from './ReSTSectionTitle';

export default function ReSTSection({ element, level, key }) {
  const children = element.children.map((e, key) => {
    return new ReST({ element: e, level: level + 1, key });
  }).toArray();
  return (
    <div key={key}>
      <ReSTSectionTitle element={element.title} level={level} key={key} />
      {children}
    </div>
  );
}
