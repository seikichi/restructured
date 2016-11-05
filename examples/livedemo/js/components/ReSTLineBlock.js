import _ from 'lodash';
import React from 'react';
import ReST from './ReST';

export default function ReSTLineBlock({ element, key }) {
  const children = _.map(element.children, (e, k) => new ReST({ element: e, key: k }));
  return <div className="line-block" key={key}>{children}</div>;
}
