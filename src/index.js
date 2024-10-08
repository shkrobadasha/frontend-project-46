import _ from 'lodash';
import letsParse from './parsers.js';

const getFormattedOutput = (arr) => {
  let result = '{\n';
  arr.forEach((item) => {
    if (!(item[0].startsWith('+') || item[0].startsWith('-'))) {
      result += `    ${item[0]}: ${item[1]}\n`;
    } else {
      result += `  ${item[0]}: ${item[1]}\n`;
    }
  });
  result += '}';
  return result;
};

const genDiff = (first, second) => {
  const obj1 = letsParse(first);
  const obj2 = letsParse(second);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2); // уникальные ключи

  const result = {};
  keys.forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
      result[`+ ${key}`] = obj2[key]; //+
    } else if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      result[`- ${key}`] = obj1[key]; //-
    } else if (obj1[key] !== obj2[key]) {
      result[`- ${key}`] = obj1[key];
      result[`+ ${key}`] = obj2[key];
    } else {
      result[key] = obj1[key];
    }
  });

  const totalResult = Object.entries(result);
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

  return getFormattedOutput(totalResult);
};

export default genDiff;
