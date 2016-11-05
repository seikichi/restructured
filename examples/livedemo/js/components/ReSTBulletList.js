import _ from 'lodash';
import React from 'react';
import ReST from './ReST';

export default function ReSTBulletList({ element, key }) {
  const children = _.map(element.children, (e, k) => new ReST({ element: e, key: k }));
  return <ul key={key}>{children}</ul>;
}
