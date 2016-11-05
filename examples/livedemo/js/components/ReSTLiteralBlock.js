import _ from 'lodash';
import React from 'react';

export default function ReSTLiteralBlock({ element, key }) {
  const children = _.map(element.children, e => e.value).join('\n');
  return <pre key={key}>{children}</pre>;
}
