import React from 'react';
import ReSTDocument from './ReSTDocument';
import ReSTSection from './ReSTSection';
import ReSTTransition from './ReSTTransition';
import ReSTParagraph from './ReSTParagraph';
import ReSTBulletList from './ReSTBulletList';
import ReSTEnumeratedList from './ReSTEnumeratedList';
import ReSTDefinitionList from './ReSTDefinitionList';
import ReSTListItem from './ReSTListItem';
import ReSTBlockQuote from './ReSTBlockQuote';
import ReSTLine from './ReSTLine';
import ReSTLineBlock from './ReSTLineBlock';
import ReSTLiteralBlock from './ReSTLiteralBlock';
import ReSTText from './ReSTText';
import ReSTEmphasis from './ReSTEmphasis';
import ReSTStrongEmphasis from './ReSTStrongEmphasis';
import ReSTInlineLiteral from './ReSTInlineLiteral';

export default function ReST({ element, key = null }) {
  switch (element.type) {
    case 'document':
      return new ReSTDocument({ element, key });
    case 'section':
      return new ReSTSection({ element, key });
    case 'transition':
      return new ReSTTransition({ element, key });
    case 'paragraph':
      return new ReSTParagraph({ element, key });
    case 'bullet_list':
      return new ReSTBulletList({ element, key });
    case 'enumerated_list':
      return new ReSTEnumeratedList({ element, key });
    case 'definition_list':
      return new ReSTDefinitionList({ element, key });
    case 'list_item':
      return new ReSTListItem({ element, key });
    case 'line':
      return new ReSTLine({ element, key });
    case 'line_block':
      return new ReSTLineBlock({ element, key });
    case 'literal_block':
      return new ReSTLiteralBlock({ element, key });
    case 'block_quote':
      return new ReSTBlockQuote({ element, key });
    case 'text':
      return new ReSTText({ element, key });
    case 'emphasis':
      return new ReSTEmphasis({ element, key });
    case 'strong':
      return new ReSTStrongEmphasis({ element, key });
    case 'literal':
      return new ReSTInlineLiteral({ element, key });
    default:
      return <div key={key}></div>;
  }
}
