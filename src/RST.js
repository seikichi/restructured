import _ from 'lodash';
import map from 'unist-util-map';
import parser from './Parser';

const RST = {
  parse(s, options = {}) {
    const tree = parser.parse(s);

    return map(tree, node => {
      const omits = [];
      if (!options.position) {
        omits.push('position');
      }
      if (!options.blanklines) {
        omits.push('blanklines');
      }
      if (!options.indent) {
        omits.push('indent');
      }
      return _.omit(node, omits);
    });
  },
};

export default RST;
