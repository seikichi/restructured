import _ from 'lodash';

const ParserUtil = {
  calcIndentSize(str) {
    const tabStop = 8;
    return _.reduce(str, (total, c) => {
      if (c === '\t') {
        return total + tabStop - (total + tabStop) % tabStop;
      }
      return total + 1;
    }, 0);
  },
};

export default ParserUtil;
