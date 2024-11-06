import * as yaml from 'js-yaml';
import { getFormat, getContentOfFile } from './util.js';

const parseOfFormat = {
  json: (nameOfFile) => JSON.parse(getContentOfFile(nameOfFile)),
  yml: (nameOfFile) => yaml.load(getContentOfFile(nameOfFile)),
  yaml: (nameOfFile) => yaml.load(getContentOfFile(nameOfFile)),
};

const letsParse = (nameOfFile) => {
  const format = getFormat(nameOfFile).slice(1);
  if (parseOfFormat[format] === undefined) {
    throw new Error('No current format');
  }
  return parseOfFormat[format](nameOfFile);
};

export default letsParse;
