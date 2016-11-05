import _ from 'lodash';
import React from 'react';
import ReST from './ReST';

export default function ReSTDocument({ element }) {
  const children = _.map(element.children, (e, key) => new ReST({ element: e, key }));
  return <div>{children}</div>;
}
