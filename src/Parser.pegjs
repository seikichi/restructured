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
  var Paragraph = require('./nodes/Paragraph').default;
  var InlineMarkup = require('./nodes/InlineMarkup').default;
  var InterpretedText = require('./nodes/InterpretedText').default;
  var HyperlinkReference = require('./nodes/HyperlinkReference').default;
  var Text = require('./nodes/Text').default;
  var MarkupLine = require('./nodes/MarkupLine').default;

  // variables
  var currentIndentSize = 0;
  var indentSizeStack = [];
  var inlineMarkupPreceding = null;
}

Document = .* { return new Document({ children: [] }); }
Paragraph = lines:MarkupLine+ BlankLines {
  return new Paragraph({ children: lines });
}

MarkupLine =
  &(Whitespace* !Endline !Whitespace .)
  children:(MarkupLineStartWithInlineMarkup / MarkupLineStartWithText)
  Endline {
    return new MarkupLine({ children: children });
  }

MarkupLineStartWithInlineMarkup =
  head:(ClearInlineMarkupPreceding InlineMarkup)
  tail:(TextWithInlineMarkup / TextWithoutInlineMarkup)* {
    return [head[1]].concat(_.flatten(tail));
  }

MarkupLineStartWithText =
  texts:(TextWithInlineMarkup / TextWithoutInlineMarkup)+ {
    return _.flatten(texts);
  }

TextWithInlineMarkup =
  text:(!Endline !(InlineMarkupPreceding InlineMarkup) .)*
  markup:(InlineMarkupPreceding InlineMarkup) {
    var textStr = _.map(text, function (v) { return v[2]; }).join('') + markup[0];
    return [new Text({ text: textStr }), markup[1]];
  }

TextWithoutInlineMarkup =
  text:(!Endline !(InlineMarkupPreceding InlineMarkup) .)+ {
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
  p:(Whitespace / '-' / ':' / '/' / '\'' / '"' / '<' / '(' / '[' / '{' /
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
  FootnoteReference

Emphasis =
  ('*' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace !'\\' . '*' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
  ('*' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'emphasis', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

StrongEmphasis =
  ('**' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace !'\\' . '**' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
  ('**' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'strong_emphasis', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

InterpretedText =
  role:(':' (!Endline !Whitespace !':' .)+ ':')?
  ('`' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace !'\\' . '`' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
  ('`' &InlineMarkupFollowing) {
    var roleStr = null;
    if (!_.isNull(role)) {
      roleStr = _.map(role[1], function (v) { return v[3]; }).join('');
    }
    return new InterpretedText({ role: roleStr, text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

InlineLiteral =
  ('``' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace . '``' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
  ('``' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'inline_literal', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

SubstitutionReference =
  ('|' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace !'\\' . '|' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
  ('|' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'substitution_reference', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

InlineInternalTarget =
  ('_`' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace !'\\' . '`' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
  ('`' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'inline_internal_target', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

FootnoteReference =
  ('[' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace !'\\' . ']_' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
  (']_' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'footnote_reference', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

HyperlinkReference =
  AnonymousHyperlinkReference /
  AnonymousSimpleHyperlinkReference /
  NamedHyperlinkReference /
  NamedSimpleHyperlinkReference

NamedHyperlinkReference =
  ('`' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace !'\\' . '`_' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
  ('`_' &InlineMarkupFollowing) {
    return new HyperlinkReference({ anonymous: false, simple: false, text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

NamedSimpleHyperlinkReference =
  ref:HyperlinkReferenceName '_' {
    return new HyperlinkReference({ anonymous: false, simple: true, text: ref });
  }

AnonymousHyperlinkReference =
  ('`' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace !'\\' . '`__' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
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

BlankLines = (Whitespace* Newline)* Whitespace* Endline
RawLine = (!'\r' !'\n' .)* Newline / .+ Eof

UnicodePd = c:. &{ return regexPd.test(c); }
UnicodePo = c:. &{ return regexPo.test(c); }
UnicodePi = c:. &{ return regexPi.test(c); }
UnicodePf = c:. &{ return regexPf.test(c); }
UnicodePs = c:. &{ return regexPs.test(c); }
UnicodePe = c:. &{ return regexPe.test(c); }
