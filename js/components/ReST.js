import React from 'react';
import ReSTDocument from './ReSTDocument';
import ReSTSection from './ReSTSection';
import ReSTTransition from './ReSTTransition';
import ReSTParagraph from './ReSTParagraph';
import ReSTBulletList from './ReSTBulletList';
import ReSTEnumeratedList from './ReSTEnumeratedList';
import ReSTListItem from './ReSTListItem';
import ReSTBlockQuote from './ReSTBlockQuote';
import ReSTText from './ReSTText';
import ReSTStrongEmphasis from './ReSTStrongEmphasis';
import ReSTInlineLiteral from './ReSTInlineLiteral';

export default function ReST({ element, level = 1, key = null }) {
  switch (element.type) {
    case 'document':
      return new ReSTDocument({ element, level, key });
    case 'section':
      return new ReSTSection({ element, level, key });
    case 'transition':
      return new ReSTTransition({ element, level, key });
    case 'paragraph':
      return new ReSTParagraph({ element, level, key });
    case 'bullet_list':
      return new ReSTBulletList({ element, level, key });
    case 'enumerated_list':
      return new ReSTEnumeratedList({ element, level, key });
    case 'list_item':
      return new ReSTListItem({ element, level, key });
    case 'block_quote':
      return new ReSTBlockQuote({ element, level, key });
    case 'text':
      return new ReSTText({ element, level, key });
    case 'strong':
      return new ReSTStrongEmphasis({ element, level, key });
    case 'literal':
      return new ReSTInlineLiteral({ element, level, key });
    default:
      return <div key={key}></div>;
  }
}
