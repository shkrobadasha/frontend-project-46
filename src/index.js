import _ from 'lodash';
import letsParse from './parsers.js';
import formatting from './formatters/index.js';
import { findDifferences } from './createTree.js';

const genDiff = (first, second, format) => {
  const obj1 = letsParse(first);
  const obj2 = letsParse(second);
  const result = findDifferences(obj1, obj2);
  return formatting(format, result);
};

export default genDiff;
