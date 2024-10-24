import _ from 'lodash';
import sortAlphabetically from './util.js';

const stylish = (tree) => {
  let res = '{\n';

  const iter = (node, depth) => {
    const pairs = Object.entries(node);

    sortAlphabetically(pairs).forEach(([key, value]) => {
      const shift = ((key.startsWith('+ ') || key.startsWith('- '))) ? 2 : 0;
      res += `${' '.repeat(4 * depth - shift)}${key}: `;
      if (!_.isObject(value)) {
        res += `${value}\n`;
        return res;
      }

      res += '{\n';
      return iter(value, depth + 1);
    });
    res += `${' '.repeat(4 * (depth - 1))}}\n`;

    return res;
  };

  return iter(tree, 1);
};

export default stylish;