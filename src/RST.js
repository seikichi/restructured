import parser from './Parser'; // eslint-disable-line import/no-unresolved

const RST = {
  parse(s, options = {}) {
    return parser.parse(s, options);
  },
};

export default RST;
