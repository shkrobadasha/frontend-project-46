import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  const iter = (node, nodeName = '') => {
    const result = node.filter((item) => item.type !== 'unchanged')
      .map((item) => {
        const predKey = nodeName ? `${nodeName}.${item.nodeName}` : item.nodeName;
        switch (item.type) {
          case 'nested':
            return iter(item.children, predKey);
          case 'update':
            return `Property '${predKey}' was updated. From ${formatValue(item.beforeValue)} to ${formatValue(item.afterValue)}`;
          case 'add':
            return `Property '${predKey}' was added with value: ${formatValue(item.value)}`;
          case 'remove':
            return `Property '${predKey}' was removed`;
          default:
            return '';
        }
      }).join('\n');
    return result;
  };

  return iter(tree);
};

export default plain;
