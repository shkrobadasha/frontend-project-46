#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((first, second) => {
    /* eslint-disable no-console */
    console.log(genDiff(first, second, program.opts().format));
    /* eslint-disable no-console */
  });

program.parse();

// console.log(program.opts().format);
