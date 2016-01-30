import parser from './Parser';

const RST = {
  parse(s) {
    return parser.parse(s, { startRule: 'Document' });
  },
};

export default RST;
