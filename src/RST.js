import { List, Map } from 'immutable';
import parser from './Parser';

const RST = {
  parse(s, options = {}) {
    return parser.parse(s, options);
  },

  traverse(node, callbacks) {
    const { enter = _node => _node } = callbacks;
    enter(node);

    for (const key of node.keys()) {
      const value = node.get(key);

      if (List.isList(value)) {
        value.toSeq().forEach(n => RST.traverse(n, callbacks));
      }
      if (Map.isMap(value)) {
        enter(value, callbacks);
      }
    }
  },
};

export default RST;
