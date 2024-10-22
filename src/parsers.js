import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

/* eslint-disable consistent-return */
const letsParse = (nameOfFile) => {
  const format = path.extname(nameOfFile);
  if (format === '.json') {
    return JSON.parse(fs.readFileSync(nameOfFile));
  } if (format === '.yml' || format === '.yaml') {
    return yaml.load(fs.readFileSync(nameOfFile, 'utf8'));
  }
};

export default letsParse;
