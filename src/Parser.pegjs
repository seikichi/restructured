{
  var _ = require('lodash');

  // nodes
  var Document = require('./nodes/Document').default;

  // variables
  var currentIndentSize = 0;
  var indentSizeStack = [];
}

Document = .* { return new Document({children: []}); }

Dedent =
  &{ indent = indentStack.pop(); return true; }

SameIndent =
  i:[ ]* &{
    var skip = indentStartLine === location()['start']['line'];
    return skip || i.length === indent;
  }
