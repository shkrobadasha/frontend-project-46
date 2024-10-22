import _ from 'lodash';

const sortAlphabetically = (totalResult) => {
  totalResult.sort((a, b) => {
    const nameA = (a[0].startsWith('+') || a[0].startsWith('-')) ? a[0].slice(2) : a[0];
    const nameB = (b[0].startsWith('+') || b[0].startsWith('-')) ? b[0].slice(2) : b[0];

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return totalResult;
};

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
