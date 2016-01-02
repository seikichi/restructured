{
  // utilities
  var _ = require('lodash');
  var ParserUtil = require('./ParserUtil').default;

  // unicodes
  var regexPd = require('unicode-8.0.0/categories/Pd/regex');
  var regexPo = require('unicode-8.0.0/categories/Po/regex');
  var regexPi = require('unicode-8.0.0/categories/Pi/regex');
  var regexPf = require('unicode-8.0.0/categories/Pf/regex');
  var regexPs = require('unicode-8.0.0/categories/Ps/regex');
  var regexPe = require('unicode-8.0.0/categories/Pe/regex');
  var mirroring = require('unicode-8.0.0/bidi-mirroring')

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
  var inlineMarkupPreceding = null;
  var blockQuoteStartLine = null;
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

BodyElement =
  BlankLines?
  element:(Paragraph / BlockQuote) {
    return element;
  }

BodyElementExceptBlockQuote = Paragraph

Paragraph =
  SameIndent
  children:(ParagraphChildrenStartWithInlineMarkup / ParagraphChildrenStartWithText)
  Newline?
  &(BlankLines) {
    return new Paragraph({ children: children });
  }

ParagraphChildrenStartWithInlineMarkup =
  head:(ClearInlineMarkupPreceding InlineMarkup)
  tail:(TextWithInlineMarkup / TextWithoutInlineMarkup)* {
    return [head[1]].concat(tail);
  }

ParagraphChildrenStartWithText =
  children:(TextWithInlineMarkup / TextWithoutInlineMarkup)+ {
    return children;
  }

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
  i:Whitespace+
  &{
    var indentSize = ParserUtil.calcIndentSize(i);
    if (indentSize <= currentIndentSize) { return false; }
    blockQuoteStartLine = location()['start']['line'];
    indentSizeStack.push(currentIndentSize);
    currentIndentSize = indentSize;
    return true;
  }

TextWithInlineMarkup =
  text:(!(Newline BlankLines) !(InlineMarkupPreceding InlineMarkup) .)*
  markup:(InlineMarkupPreceding InlineMarkup) {
    var textStr = _.map(text, function (v) { return v[2]; }).join('') + markup[0];
    return [new Text({ text: textStr }), markup[1]];
  }

TextWithoutInlineMarkup =
  text:(!(Newline BlankLines) !(InlineMarkupPreceding InlineMarkup) .)+ {
    var textStr = _.map(text, function (v) { return v[2]; }).join('');
    return [new Text({ text: textStr })];
  }

// Inline Markup
ClearInlineMarkupPreceding = &{
  inlineMarkupPreceding = null;
  return true;
}

CorrespondingClosingChar =
  f:InlineMarkupFollowing &{
    var code = f.charCodeAt(0);
    return mirroring[code] && mirroring[code] == inlineMarkupPreceding
  }

InlineMarkupPreceding =
  p:(Whitespace / Newline / '-' / ':' / '/' / '\'' / '"' / '<' / '(' / '[' / '{' /
     UnicodePd / UnicodePo / UnicodePi / UnicodePf / UnicodePs) {
    inlineMarkupPreceding = p;
    return p;
  }

InlineMarkupFollowing =
  Endline / Whitespace /
  '-' / '.' / ',' / ':' / ';' / '!' / '?' / '\\' /
  '/' / '\'' / '"' / ')' / ']' / '}' / '>' /
  UnicodePd / UnicodePo / UnicodePi / UnicodePf / UnicodePe

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

Emphasis =
  ('*' !NormalizedToWhitespace !CorrespondingClosingChar)
  text:(!(Newline BlankLines) !(!NormalizedToWhitespace !'\\' . '*' InlineMarkupFollowing) .)*
  last:(!Endline !NormalizedToWhitespace .)
  ('*' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'emphasis', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

StrongEmphasis =
  ('**' !NormalizedToWhitespace !CorrespondingClosingChar)
  text:(!(Newline BlankLines) !(!NormalizedToWhitespace !'\\' . '**' InlineMarkupFollowing) .)*
  last:(!Endline !NormalizedToWhitespace .)
  ('**' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'strong_emphasis', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

InterpretedText =
  role:(':' (!Endline !Whitespace !':' .)+ ':')?
  ('`' !NormalizedToWhitespace !CorrespondingClosingChar)
  text:(!(Newline BlankLines) !(!NormalizedToWhitespace !'\\' . '`' InlineMarkupFollowing) .)*
  last:(!Endline !NormalizedToWhitespace .)
  ('`' &InlineMarkupFollowing) {
    var roleStr = null;
    if (!_.isNull(role)) {
      roleStr = _.map(role[1], function (v) { return v[3]; }).join('');
    }
    return new InterpretedText({ role: roleStr, text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

InlineLiteral =
  ('``' !NormalizedToWhitespace !CorrespondingClosingChar)
  text:(!(Newline BlankLines) !(!NormalizedToWhitespace . '``' InlineMarkupFollowing) .)*
  last:(!Endline !NormalizedToWhitespace .)
  ('``' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'inline_literal', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

SubstitutionReference =
  ('|' !NormalizedToWhitespace !CorrespondingClosingChar)
  text:(!(Newline BlankLines) !(!NormalizedToWhitespace !'\\' . '|' InlineMarkupFollowing) .)*
  last:(!Endline !NormalizedToWhitespace .)
  ('|' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'substitution_reference', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

InlineInternalTarget =
  ('_`' !NormalizedToWhitespace !CorrespondingClosingChar)
  text:(!(Newline BlankLines) !(!NormalizedToWhitespace !'\\' . '`' InlineMarkupFollowing) .)*
  last:(!Endline !NormalizedToWhitespace .)
  ('`' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'inline_internal_target', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
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
    return new InlineMarkup({ type: 'footnote_reference', text: label });
  }

CitationReference =
  '[' label:ReferenceName ']_' &InlineMarkupFollowing {
    return new InlineMarkup({ type: 'citation_reference', text: label });
  }

HyperlinkReference =
  AnonymousHyperlinkReference /
  AnonymousSimpleHyperlinkReference /
  NamedHyperlinkReference /
  NamedSimpleHyperlinkReference

NamedHyperlinkReference =
  ('`' !NormalizedToWhitespace !CorrespondingClosingChar)
  text:(!(Newline BlankLines) !(!NormalizedToWhitespace !'\\' . '`_' InlineMarkupFollowing) .)*
  last:(!Endline !NormalizedToWhitespace .)
  ('`_' &InlineMarkupFollowing) {
    return new HyperlinkReference({ anonymous: false, simple: false, text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

NamedSimpleHyperlinkReference =
  ref:HyperlinkReferenceName '_' {
    return new HyperlinkReference({ anonymous: false, simple: true, text: ref });
  }

AnonymousHyperlinkReference =
  ('`' !NormalizedToWhitespace !CorrespondingClosingChar)
  text:(!(Newline BlankLines) !(!NormalizedToWhitespace !'\\' . '`_' InlineMarkupFollowing) .)*
  last:(!Endline !NormalizedToWhitespace .)
  ('`__' &InlineMarkupFollowing) {
    return new HyperlinkReference({ anonymous: true, simple: false, text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

AnonymousSimpleHyperlinkReference =
  ref:HyperlinkReferenceName '__' {
    return new HyperlinkReference({ anonymous: true, simple: true, text: ref });
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

BlankLines =
  (Whitespace* Newline &(Whitespace* Endline))*
  Whitespace*
  Endline

RawLine =
  raw:(!Endline .)+ Endline {
    return { raw: _.map(raw, function (v) { return v[1]; }).join('') };
  }

UnicodePd = c:. &{ return regexPd.test(c); }
UnicodePo = c:. &{ return regexPo.test(c); }
UnicodePi = c:. &{ return regexPi.test(c); }
UnicodePf = c:. &{ return regexPf.test(c); }
UnicodePs = c:. &{ return regexPs.test(c); }
UnicodePe = c:. &{ return regexPe.test(c); }

Dedent =
  &{
    currentIndentSize = indentSizeStack.pop();
    return true;
  }

SameIndent =
  i:Whitespace* &{
    var skip = blockQuoteStartLine === location()['start']['line'];
    return skip || ParserUtil.calcIndentSize(i) === currentIndentSize;
  }
