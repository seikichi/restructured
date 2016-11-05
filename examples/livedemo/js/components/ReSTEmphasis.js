import _ from 'lodash';
import React from 'react';
import ReST from './ReST';

export default function ReSTEmphasis({ element, key }) {
  const children = _.map(element.children, (e, k) => new ReST({ element: e, key: k }));
  return <em key={key}>{children}</em>;
}
