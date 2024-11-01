import * as yaml from 'js-yaml';
import { getFormat, getContentOfFile } from './util.js';

const parseOfFormat = {
  '.json' : (nameOfFile) => JSON.parse(getContentOfFile(nameOfFile)),
  '.yml' : (nameOfFile) => yaml.load(getContentOfFile(nameOfFile)),
  '.yaml' : (nameOfFile) => yaml.load(getContentOfFile(nameOfFile)),
}

const letsParse = (nameOfFile) => {
  const format = getFormat(nameOfFile);
  if (!Object.keys(parseOfFormat).includes(format)) {
    throw new Error('No current format');
  }
  return parseOfFormat[format](nameOfFile)
};

export default letsParse;
