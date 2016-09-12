import removePosition from 'unist-util-remove-position';
import parser from './Parser';

const RST = {
  parse(s, options = {}) {
    let tree = parser.parse(s);
    if (!options.position) {
      tree = removePosition(tree, true);
    }
    return tree;
  },
};

export default RST;
