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
    const obj1 = letsParse(fs.readFileSync(first));
    const obj2 = letsParse(fs.readFileSync(second));
    console.log(genDiff(obj1, obj2))

    //здесь будем вызывать функцию, которая читает названия файлов, 
    //находит сами файлы, парсит их и печатате первую строку
    
  });

program.parse();
