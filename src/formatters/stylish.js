import _ from 'lodash';

const formatValue = (currentValue, depth) => {
  if (_.isObject(currentValue)) {
    const node = Object.entries(currentValue).map(([key, value]) => `${' '.repeat(4 * (depth + 1))}${key}: ${formatValue(value, depth + 1)}`).join('\n');
    return `{\n${node}\n${' '.repeat(4 * (depth))}}`;
  }
  return currentValue;
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const result = node.map((item) => {
      switch (item.type) {
        case 'nested':
          return `${' '.repeat(4 * depth)}${item.nodeName}: {\n${iter(item.children, depth + 1)}\n${' '.repeat(4 * (depth))}}`;
        case 'update':
          return `${' '.repeat(4 * depth - 2)}- ${item.nodeName}: ${formatValue(item.beforeValue, depth)}\n${' '.repeat(4 * depth - 2)}+ ${item.nodeName}: ${formatValue(item.afterValue, depth)}`;
        case 'add':
          return `${' '.repeat(4 * depth - 2)}+ ${item.nodeName}: ${formatValue(item.value, depth)}`;
        case 'remove':
          return `${' '.repeat(4 * depth - 2)}- ${item.nodeName}: ${formatValue(item.value, depth)}`;
        default:
          return `${' '.repeat(4 * depth)}${item.nodeName}: ${formatValue(item.value, depth)}`;
      }
    }).join('\n');

    return result;
  };

  return `{\n${iter(tree, 1)}\n}`;
};

export default stylish;
