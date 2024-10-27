import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Comparing json files using the default formatter', () => {
  const file1 = (`${__dirname}/../__fixtures__/file1.json`);
  const file2 = (`${__dirname}/../__fixtures__/file2.json`);
  const expFile = fs.readFileSync('__fixtures__/expectStylish.txt', 'utf8');
  expect(genDiff(file1, file2))
    .toEqual(expFile);
});

test('Comparing yaml files using the stylish formatter', () => {
  const file1 = (`${__dirname}/../__fixtures__/file1.yaml`);
  const file2 = (`${__dirname}/../__fixtures__/file2.yaml`);
  const format = 'stylish';
  const expFile = fs.readFileSync('__fixtures__/expectStylish.txt', 'utf8');
  expect(genDiff(file1, file2, format))
    .toEqual(expFile);
});

test('Comparing yaml files using the plain formatter', () => {
  const file1 = (`${__dirname}/../__fixtures__/file1.yaml`);
  const file2 = (`${__dirname}/../__fixtures__/file2.yaml`);
  const format = 'plain';
  const expFile = fs.readFileSync('__fixtures__/expectPlain.txt', 'utf8');
  expect(genDiff(file1, file2, format))
    .toEqual(expFile);
});

test('Comparing json files using the json formatter', () => {
  const file1 = (`${__dirname}/../__fixtures__/file1.json`);
  const file2 = (`${__dirname}/../__fixtures__/file2.json`);
  const format = 'json';
  const expFile = fs.readFileSync('__fixtures__/expectJson.txt', 'utf8');
  expect(genDiff(file1, file2, format))
    .toEqual(expFile);
});
