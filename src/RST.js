import parser from './Parser'; // eslint-disable-line import/no-unresolved

const RST = {
  parse(s) {
    return parser.parse(s, { startRule: 'Document' });
  },
};

export default RST;
