/*import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
 
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
 
test('Comparing json files using the default formatter', () => {
  const file1 = readFile('file1.json');
  console.log(file1)
  const file2 = readFile('file2.json');
  const expFile = readFile('expectStylish.txt');
  expect(genDiff(file1, file2))
    .toEqual(expFile);
});
 
test('Comparing yaml files using the stylish formatter', () => {
  const file1 = readFile('file1.yaml');
  const file2 = readFile('file2.yaml');
  const format = 'stylish';
  const expFile = readFile('expectStylish.txt');
  expect(genDiff(file1, file2, format))
    .toEqual(expFile);
});
 
test('Comparing yaml files using the plain formatter', () => {
  const file1 = readFile('file1.yaml');
  const file2 = readFile('file2.yaml');
  const format = 'plain';
  const expFile = readFile('expectPlain.txt');
  expect(genDiff(file1, file2, format))
    .toEqual(expFile);
});
 
//надо строить путь, а оно читает весь файд 
test('Comparing json files using the json formatter', () => {
  const file1 = readFile('file1.json');
  const file2 = readFile('file2.json');
  const format = 'json';
  const expFile = readFile('expectJson.txt');
  expect(genDiff(file1, file2, format))
    .toEqual(expFile);
});*/

import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFileName = (fileName) => (`${__dirname}/../__fixtures__/${fileName}`);
const readFile = (fileNamePath) => fs.readFileSync(`${getFileName(fileNamePath)}`, 'utf8');

test('Comparing json files using the default formatter', () => {
  const file1 = getFileName('file1.json');
  const file2 = getFileName('file2.json');
  const expFile = readFile('expectStylish.txt');
  expect(genDiff(file1, file2))
    .toEqual(expFile);
});

test('Comparing yaml files using the stylish formatter', () => {
  const file1 = getFileName('file1.yaml');
  const file2 = getFileName('file2.yaml');
  const format = 'stylish';
  const expFile = readFile('expectStylish.txt');
  expect(genDiff(file1, file2, format))
    .toEqual(expFile);
});

test('Comparing yaml files using the plain formatter', () => {
  const file1 = getFileName('file1.yaml');
  const file2 = getFileName('file2.yaml');
  const format = 'plain';
  const expFile = readFile('expectPlain.txt');
  expect(genDiff(file1, file2, format))
    .toEqual(expFile);
});

test('Comparing json files using the json formatter', () => {
  const file1 = getFileName('file1.json');
  const file2 = getFileName('file2.json');
  const format = 'json';
  const expFile = readFile('expectJson.txt');
  expect(genDiff(file1, file2, format))
    .toEqual(expFile);
});