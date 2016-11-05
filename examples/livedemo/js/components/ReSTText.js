import React from 'react';

export default function ReSTText({ element, key }) {
  return <span key={key}>{element.value}</span>;
}
