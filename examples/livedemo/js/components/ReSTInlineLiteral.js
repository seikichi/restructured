import _ from 'lodash';
import React from 'react';
import ReST from './ReST';

export default function ReSTStrongEmphasis({ element, key }) {
  const children = _.map(element.children, (e, k) => new ReST({ element: e, key: k }));
  return <tt key={key}>{children}</tt>;
}
