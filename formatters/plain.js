import _ from 'lodash';
import sortAlphabetically from './util.js';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  let res = '\n';
  const iter = (node, nodeName = '') => {
    const pairs = Object.entries(node);
    const keyPairs = Object.keys(node);

    sortAlphabetically(pairs).forEach(([key, value]) => {
      const keyForPred = (key.startsWith('+ ') || key.startsWith('- ')) ? key.slice(2) : key;
      const predKey = nodeName ? `${nodeName}.${keyForPred}` : keyForPred;

      if (key.startsWith('- ') && !(keyPairs.includes(`+ ${key.slice(2)}`))) {
        res += `Property '${predKey}' was removed\n`;
      } else if (key.startsWith('+ ') && !(keyPairs.includes(`- ${key.slice(2)}`))) {
        res += `Property '${predKey}' was added with value: ${formatValue(value)}\n`;
      } else if (key.startsWith('+ ') && keyPairs.includes(`- ${key.slice(2)}`)) {
        const secondKey = `- ${key.slice(2)}`;
        const secondValue = node[secondKey];
        res += `Property '${predKey}' was updated. From ${formatValue(secondValue)} to ${formatValue(value)}\n`;
      } else if (_.isObject(value)) {
        return `${iter(value, predKey)}`;
      }
    });

    return res;
  };

  return iter(tree, '');
};

export default plain;
