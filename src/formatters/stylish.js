import _ from 'lodash';
import sortAlphabetically from './util.js';

//формируем строку внутрь
//уезжает второй слой

//set6 и doge идет как вложенный 
const formatValue = (value, depth) => {
  if (_.isObject(value)) {
    const node = Object.entries(value).map(([key, value]) => {
      return `${' '.repeat(4 * (depth + 1))}${key}: ${formatValue(value, depth + 1)}`
    }).join('\n');

    return `{\n${node}\n${' '.repeat(4 * (depth))}}`
  }
  return value
}

const stylish = (tree) => {

  const iter = (node, depth) => {
    const result = node.map((item) => {

      switch (item.type){
        case 'nested':
          return `${' '.repeat(4 * depth)}${item.nodeName}: {\n${iter(item.children, depth + 1)}\n${' '.repeat(4 * (depth))}}`;
        case 'update':
          return `${' '.repeat(4 * depth - 2)}- ${item.nodeName}: ${formatValue(item.beforeValue, depth)}\n${' '.repeat(4 * depth - 2)}+ ${item.nodeName}: ${formatValue(item.afterValue, depth)}`
        case 'add':
          return `${' '.repeat(4 * depth - 2)}+ ${item.nodeName}: ${formatValue(item.value, depth)}`
        case 'remove':
          return `${' '.repeat(4 * depth - 2)}- ${item.nodeName}: ${formatValue(item.value, depth)}`
        default:
          return `${' '.repeat(4 * depth)}${item.nodeName}: ${formatValue(item.value, depth)}`;
      }
  
    }).join(`\n`)

    return result
  };



  return `{\n${iter(tree, 1)}\n}`;
};

export default stylish;