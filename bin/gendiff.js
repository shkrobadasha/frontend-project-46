#!/usr/bin/env node

import { program } from 'commander';
import { letsParse } from '../src/index.js';
import { createRequire } from "module";
import { genDiff } from '../src/index.js';
const require = createRequire(import.meta.url);
const fs = require('fs');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((first, second) => {
    console.log(genDiff(first, second))
  });

program.parse();

//добавить парсер для уамл, возможно, стоит передавать сразу first?, second и у них считывать расширение, а потом делатт fs read
