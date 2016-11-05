import _ from 'lodash';
import React from 'react';
import ReST from './ReST';

export default function ReSTDefinitionList({ element, key }) {
  const children = _.flatten(_.map(element.children, (e, k) => {
    // ignore classifier (FIXME)
    const term = _.map(e.children[0].children, (e2, k2) => {
      return new ReST({ element: e2, key: k2 });
    });
    const definition = _.map(e.children[e.children.length - 1].children, (e2, k2) => {
      return new ReST({ element: e2, key: k2 });
    });
    return [<dt key={k + '-dt'}>{term}</dt>, <dd key={k + '-dd'}>{definition}</dd>];
  }));
  return <dl key={key}>{children}</dl>;
}
