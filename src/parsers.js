import * as yaml from 'js-yaml';
import { getFormat, getContentOfFile } from './util.js';

const letsParse = (nameOfFile) => {
  const format = getFormat(nameOfFile);
  if (format === '.json') {
    return JSON.parse(getContentOfFile(nameOfFile));
  } if (format === '.yml' || format === '.yaml') {
    return yaml.load(getContentOfFile(nameOfFile));
  }
  throw new Error('No current format');
};

export default letsParse;
