import parser from './parser';

const RST = {
  parse(s) {
    return parser.parse(s, { startRule: 'Document' });
  },
};

export default RST;
