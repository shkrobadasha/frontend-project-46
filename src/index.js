import _ from 'lodash';
import letsParse from './parsers.js';
import stylish from './stylish.js';

export const findDifferences = (obj1, obj2) => {
  const result = {};
  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)
      && Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        const nestedDiffs = findDifferences(obj1[key], obj2[key]);
        if (Object.keys(nestedDiffs).length > 0) {
          result[key] = nestedDiffs;
        }
      } else if (obj1[key] !== obj2[key]) {
        result[`- ${key}`] = obj1[key];
        result[`+ ${key}`] = obj2[key];
      } else if (obj1[key] === obj2[key]) {
        result[key] = obj1[key];
      }
    } else {
      result[`- ${key}`] = obj1[key];
    }
  }

  for (const key in obj2) {
    if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
      result[`+ ${key}`] = obj2[key];
    }
  }

  return result;
};

const genDiff = (first, second) => {
  const obj1 = letsParse(first);
  const obj2 = letsParse(second);
  const result = findDifferences(obj1, obj2);
  return stylish(result);
};

export default genDiff;
