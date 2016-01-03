{
  // utilities
  var _ = require('lodash');
  var ParserUtil = require('./ParserUtil').default;

  // nodes
  var Document = require('./nodes/Document').default;
  var Section = require('./nodes/Section').default;
  var Transition = require('./nodes/Transition').default;

  var Paragraph = require('./nodes/Paragraph').default;
  var BlockQuote = require('./nodes/BlockQuote').default;

  var Text = require('./nodes/Text').default;
  var InlineMarkup = require('./nodes/InlineMarkup').default;
  var InterpretedText = require('./nodes/InterpretedText').default;
  var HyperlinkReference = require('./nodes/HyperlinkReference').default;

  // variables
  var currentIndentSize = 0;
  var indentSizeStack = [];
  var indentIgnoreLine = null;
  var nextIndentSize = null;

  var inlineMarkupPreceding = null;
  var markupEndString = null;
}

// Document Structure
Document =
  children:(Section / Transition / BodyElement)*
  BlankLines {
    return new Document({ children: children });
  }

Section =
  BlankLines?
  section:(SectionWithOverline / SectionWithoutOverline)
  &(BlankLines) {
    return section;
  }

SectionWithOverline =
  &(SectionLine !BlankLines RawLine SectionLine)
  overline:SectionLine
  Whitespace* title:RawLine
  underline:SectionLine {
    var children = peg$parse(title.raw, {startRule: 'Paragraph'}).children;
    return new Section({ title: children, underline: underline, overline: overline });
  }

SectionWithoutOverline =
  &(!BlankLines RawLine SectionLine)
  title:RawLine
  underline:SectionLine {
    var children = peg$parse(title.raw, {startRule: 'Paragraph'}).children;
    return new Section({ title: children, underline: underline });
  }

SectionLine =
  line:(('!!!!' '!'*) / ('""""' '"'*) / ('####' '#'*) / ('$$$$' '$'*) /
        ('%%%%' '%'*) / ('&&&&' '&'*) / ("''''" "'"*) / ('((((' '('*) /
        ('))))' ')'*) / ('****' '*'*) / ('++++' '+'*) / (',,,,' ','*) /
        ('----' '-'*) / ('....' '.'*) / ('////' '/'*) / ('::::' ':'*) /
        (';;;;' ';'*) / ('<<<<' '<'*) / ('====' '='*) / ('>>>>' '>'*) /
        ('????' '?'*) / ('@@@@' '@'*) / ('[[[[' '['*) / ('\\\\\\\\' '\\'*) /
        (']]]]' ']'*) / ('^^^^' '^'*) / ('____' '_'*) / ('````' '`'*) /
        ('{{{{' '{'*) / ('||||' '|'*) / ('}}}}' '}'*) / ('~~~~' '~'*))
  Whitespace* Newline {
    return {line: line[0] + line[1].join('')};
  }


Transition =
  BlankLines
  marker:TransitionMarker Whitespace* Newline
  &(BlankLines) {
    return new Transition({ marker: marker });
  }

TransitionMarker =
  marker:(('!!!!' '!'*) / ('""""' '"'*) / ('####' '#'*) / ('$$$$' '$'*) /
          ('%%%%' '%'*) / ('&&&&' '&'*) / ("''''" "'"*) / ('((((' '('*) /
          ('))))' ')'*) / ('****' '*'*) / ('++++' '+'*) / (',,,,' ','*) /
          ('----' '-'*) / ('....' '.'*) / ('////' '/'*) / ('::::' ':'*) /
          (';;;;' ';'*) / ('<<<<' '<'*) / ('====' '='*) / ('>>>>' '>'*) /
          ('????' '?'*) / ('@@@@' '@'*) / ('[[[[' '['*) / ('\\\\\\\\' '\\'*) /
          (']]]]' ']'*) / ('^^^^' '^'*) / ('____' '_'*) / ('````' '`'*) /
          ('{{{{' '{'*) / ('||||' '|'*) / ('}}}}' '}'*) / ('~~~~' '~'*)) {
    return marker[0] + marker[1].join('');
  }

BodyElementExceptBlockQuote = BulletList / DefinitionList / Paragraph

BodyElement =
  BlankLines?
  element:(BodyElementExceptBlockQuote / BlockQuote) {
    return element;
  }

Paragraph = body:(SameIndent ParagraphText Endline)+ {
  var children = _.flatten(_.map(body, function (v) { return v[1]; }));
  return new Paragraph({ children: children });
}

ParagraphText = (
  ClearInlineMarkupPreceding
  head:(InlineMarkup / (Text InlineMarkup?))
  tail:(Text InlineMarkup?)*
) {
  return _.compact(_.flatten([head].concat(tail)));
}

Text =
  text:(!Newline !(InlineMarkupPreceding InlineMarkup) .)+
  last:(InlineMarkupPreceding &(InlineMarkup))? {
    var textStr = _.map(text, function (v) { return v[2]; }).join('');
    if (!_.isNull(last)) {
      textStr += last[0];
      inlineMarkupPreceding = last[0];
    }
    return new Text({ text: textStr });
  }

// Bullet List
BulletList =
  BlankLines?
  head:BulletListItem
  tail:(BlankLines? BulletListItem)* {
    return {type: 'bullet_list', children: [head].concat(tail.map(function (t) { return t[1]; }))};
  }

BulletListItem =
  SameIndent
  marker:'-'
  BulletListIndent
  body:BodyElement*
  Dedent {
    return {type: 'bullet_list_item', children: body};
  }

BulletListIndent =
  i:Whitespace+ {
    var nextIndentSize = currentIndentSize + ParserUtil.calcIndentSize(i) + 1;
    indentIgnoreLine = location()['start']['line'];
    indentSizeStack.push(currentIndentSize);
    currentIndentSize = nextIndentSize;
  }

// Definition List
DefinitionList =
  BlankLines?
  head:DefinitionListItem
  tail:(BlankLines? DefinitionListItem)*
  &(BlankLines) {
    return {type: 'definition_list', children: [head].concat(tail.map(function (t) { return t[1]; }))};
  }

DefinitionListItem =
  SameIndent term:DefinitionTerm Whitespace* (':' Whitespace* DefinitionClassifier Whitespace*)* Newline
  Indent
  body:BodyElement+
  Dedent {
    return { type: 'definition_list_item', term: term, body: body };
  }

DefinitionTerm =
  term:Nonspacechar+ {
    return term.map(function (t) { return t[1]; }).join('');
  }

DefinitionClassifier =
  term:Nonspacechar+ {
    return term.map(function (t) { return t[1]; }).join('');
  }

// BlockQuote
BlockQuote = NestedBlockQuote / SimpleBlockQuote

BlockQuoteBody =
  head:BodyElementExceptBlockQuote
  tail:BodyElement* {
    return [head].concat(tail);
  }

NestedBlockQuote =
  BlankLines?
  BlockQuoteIndent
  children:BlockQuoteBody
  Dedent
  outer:BlockQuote {
    return new BlockQuote({ children: [new BlockQuote({ children: children })].concat(outer.children) });
  }

SimpleBlockQuote =
  BlankLines?
  BlockQuoteIndent
  children:BlockQuoteBody
  Dedent {
    return new BlockQuote({ children: children });
  }

BlockQuoteIndent =
  &(i:Whitespace+
    &{
      var indentSize = ParserUtil.calcIndentSize(i);
      if (indentSize <= currentIndentSize) { return false; }
      indentSizeStack.push(currentIndentSize);
      currentIndentSize = indentSize;
      return true;
    })

// Inline Markup
ClearInlineMarkupPreceding = &{
  inlineMarkupPreceding = null;
  return true;
}

CorrespondingClosingChar =
  c:. &{
    return ParserUtil.isMatchPunctuations(inlineMarkupPreceding, c);
  }

InlineMarkupPreceding =
  c:.
  &{ return ParserUtil.isInlineMarkupPrefix(c); } {
    inlineMarkupPreceding = c;
    return c;
  }

InlineMarkupFollowing =
  Endline / c:. &{ return ParserUtil.isInlineMarkupSuffix(c); }

InlineMarkup =
  StrongEmphasis /
  Emphasis /
  InlineLiteral /
  InlineInternalTarget /
  HyperlinkReference /
  InterpretedText /
  SubstitutionReference /
  FootnoteReference /
  CitationReference

MarkupEndString =
  &{ return markupEndString.length == 1 } s:(.) &{ return s === markupEndString; } /
  &{ return markupEndString.length == 2 } s:(..) &{ return s.join('') === markupEndString; } /
  &{ return markupEndString.length == 3 } s:(...) &{ return s.join('') === markupEndString; }

MarkupTextWithIndent =
  indent:SameIndent
  text:(!Newline !(!NormalizedToWhitespace !'\\' . MarkupEndString InlineMarkupFollowing) .)* {
    var textStr = _.map(text, function (v) { return v[2]; }).join('');
    return new Text({ text: textStr, indent: indent });
  }

MarkupTextWithoutIndent =
  text:(!Newline !(!NormalizedToWhitespace !'\\' . MarkupEndString InlineMarkupFollowing) .)* {
    var textStr = _.map(text, function (v) { return v[2]; }).join('');
    return new Text({ text: textStr });
  }

MarkupTail =
  first:MarkupTextWithoutIndent
  middle:(Newline MarkupTextWithIndent)*
  last:(!Endline !NormalizedToWhitespace .)
  MarkupEndString
  &InlineMarkupFollowing {
    var children = [first].concat(_.map(middle, function (v) { return v[1]; }));
    children[children.length - 1].text += last[2];
    return children;
  }

Emphasis =
  &{ debugger; return inlineMarkupPreceding != '*'; }
  ('*' !'*' !NormalizedToWhitespace !CorrespondingClosingChar)
  &{ markupEndString = '*'; return true; }
  children:MarkupTail {
    return new InlineMarkup({ type: 'emphasis', children: children });
  }

StrongEmphasis =
  ('**' !NormalizedToWhitespace !CorrespondingClosingChar)
  &{ markupEndString = '**'; return true; }
  children:MarkupTail {
    return new InlineMarkup({ type: 'strong_emphasis', children: children });
  }

InterpretedText =
  role:(':' (!Endline !Whitespace !':' .)+ ':')?
  ('`' !NormalizedToWhitespace !CorrespondingClosingChar)
  &{ markupEndString = '`'; return true; }
  children:MarkupTail {
    var roleStr = null;
    if (!_.isNull(role)) {
      roleStr = _.map(role[1], function (v) { return v[3]; }).join('');
    }
    return new InterpretedText({ role: roleStr, children: children });
  }

// TODO(seikichi): unescaped backslash preceding a start-string end-string
InlineLiteral =
  ('``' !NormalizedToWhitespace !CorrespondingClosingChar)
  &{ markupEndString = '``'; return true; }
  children:MarkupTail {
    return new InlineMarkup({ type: 'inline_literal', children: children });
  }

SubstitutionReference =
  ('|' !NormalizedToWhitespace !CorrespondingClosingChar)
  &{ markupEndString = '|'; return true; }
  children:MarkupTail {
    return new InlineMarkup({ type: 'substitution_reference', children: children });
  }

InlineInternalTarget =
  ('_`' !NormalizedToWhitespace !CorrespondingClosingChar)
  &{ markupEndString = '`'; return true; }
  children:MarkupTail {
    return new InlineMarkup({ type: 'inline_internal_target', children: children });
  }

FootnoteLabel =
  label:([0-9]+ / '#' ReferenceName / '#' / '*') {
    if (_.isArray(label)) {
      return label.join('');
    }
    return label;
  }

FootnoteReference =
  '[' label:FootnoteLabel ']_' &InlineMarkupFollowing {
    return new InlineMarkup({ type: 'footnote_reference', children: new Text({ text: label }) });
  }

CitationReference =
  '[' label:ReferenceName ']_' &InlineMarkupFollowing {
    return new InlineMarkup({ type: 'citation_reference', children: new Text({ text: label }) });
  }

HyperlinkReference =
  AnonymousHyperlinkReference /
  AnonymousSimpleHyperlinkReference /
  NamedHyperlinkReference /
  NamedSimpleHyperlinkReference

NamedHyperlinkReference =
  ('`' !NormalizedToWhitespace !CorrespondingClosingChar)
  &{ markupEndString = '`_'; return true; }
  children:MarkupTail {
    return new HyperlinkReference({ anonymous: false, simple: false, children: children });
  }

NamedSimpleHyperlinkReference =
  ref:HyperlinkReferenceName '_' &InlineMarkupFollowing {
    return new HyperlinkReference({ anonymous: false, simple: true, children: [new Text({ text: ref })] });
  }

AnonymousHyperlinkReference =
  ('`' !NormalizedToWhitespace !CorrespondingClosingChar)
  &{ markupEndString = '`__'; return true; }
  children:MarkupTail {
    return new HyperlinkReference({ anonymous: true, simple: false, children: children });
    return {children: children};
  }

AnonymousSimpleHyperlinkReference =
  ref:HyperlinkReferenceName '__' &InlineMarkupFollowing {
    return new HyperlinkReference({ anonymous: true, simple: true, children: [new Text({ text: ref })] });
  }

// Reference
ReferenceName =
  head:AlphanumericAscii
  tail:(AlphanumericAscii / [-_.:+])+ {
    return head + tail.join('');
  }

HyperlinkReferenceName =
  head:AlphanumericAscii
  tail:(AlphanumericAscii / [-.:+])+ {
    return head + tail.join('');
  }

// Utility
AlphanumericAscii = [A-Za-z0-9]
Eof = !.
Newline = '\n' / ('\r' '\n'?)
Whitespace = ' ' / '\v' / '\f' / '\t'
Endline = Newline / Eof
NormalizedToWhitespace = Whitespace / Newline
Nonspacechar = !NormalizedToWhitespace .

BlankLines =
  (Whitespace* Newline &(Whitespace* Endline))*
  Whitespace*
  Endline

RawLine =
  raw:(!Endline .)+ Endline {
    return { raw: _.map(raw, function (v) { return v[1]; }).join('') };
  }

Indent =
  &(i:Whitespace+ &{
    var size = ParserUtil.calcIndentSize(i);
    if (size <= currentIndentSize) { return false; }
    nextIndentSize = size;
    return true;
  })
  &((Whitespace* Newline / i:Whitespace+ RawLine &{
    var size = ParserUtil.calcIndentSize(i);
    if (size <= currentIndentSize) { return false; }
    nextIndentSize = Math.min(nextIndentSize, size);
    return true;
  })*)
  &{
    indentSizeStack.push(currentIndentSize);
    currentIndentSize = nextIndentSize;
    return true;
  }

Dedent =
  &{
    currentIndentSize = indentSizeStack.pop();
    return true;
  }

SameIndent =
  i:Whitespace* &{
    var ignore = indentIgnoreLine === location()['start']['line'];
    return ignore || ParserUtil.calcIndentSize(i) === currentIndentSize;
  } {
    return i.join('');
  }
