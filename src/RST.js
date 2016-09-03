import parser from './Parser';

const RST = {
  parse(s, options = {}) {
    return parser.parse(s, options);
  },
};

export default RST;
