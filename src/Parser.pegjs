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
  tail:TextWithInlineMarkup* {
    return [head[1]].concat(_.flatten(tail));
  }

MarkupLineStartWithText =
  texts:TextWithInlineMarkup+ {
    return _.flatten(texts);
  }

TextWithInlineMarkup =
  text:(!Endline !(InlineMarkupPreceding InlineMarkup) .)+
  markup:(InlineMarkupPreceding InlineMarkup)? {
    var textStr = _.map(text, function (v) { return v[2]; }).join('');
    if (!_.isNull(markup)) {
      textStr += markup[0];
    }
    var ret = [new Text({ text: textStr })];
    if (!_.isNull(markup)) {
      ret.push(markup[1]);
    }
    return ret;
  }

// Inline Markup
InlineMarkup = Emphasis

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

// Emphasis
Emphasis =
  ('*' !Whitespace !CorrespondingClosingChar)
  text:(!Endline !(!Whitespace !'\\' . '*' InlineMarkupFollowing) .)*
  last:(!Endline !Whitespace .)
  ('*' &InlineMarkupFollowing) {
    return new InlineMarkup({ type: 'emphasis', text: _.map(text, function (v) { return v[2]; }).join('') + last[2] });
  }

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
