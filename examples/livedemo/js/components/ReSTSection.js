import _ from 'lodash';
import React from 'react';
import ReST from './ReST';

export default function ReSTSection({ element, key }) {
  const TitleTag = `h${element.depth}`;
  const title = element.children[0];
  const titleChildren = _.map(title.children, (e, k) => new ReST({ element: e, key: k }));

  const children = _.map(element.children.slice(1), (e, k) => {
    return new ReST({ element: e, key: k });
  });
  return (
    <div key={key}>
      <TitleTag key={key}>{titleChildren}</TitleTag>
      {children}
    </div>
  );
}
