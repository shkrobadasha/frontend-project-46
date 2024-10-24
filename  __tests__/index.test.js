import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';
import resultStylishString from '../__fixtures__/expectStylish.js';
import resultPlainString from '../__fixtures__/expectPlain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Comparing json files using the default formatter', () => {
  const file1 = (`${__dirname}/../__fixtures__/file1.json`);
  const file2 = (`${__dirname}/../__fixtures__/file2.json`);
  expect(genDiff(file1, file2))
    .toEqual(resultStylishString);
});

test('Comparing yaml files using the stylish formatter', () => {
  const file1 = (`${__dirname}/../__fixtures__/file1.yaml`);
  const file2 = (`${__dirname}/../__fixtures__/file2.yaml`);
  const format = 'stylish';

  expect(genDiff(file1, file2, format))
    .toEqual(resultStylishString);
});

test('Comparing yaml files using the plain formatter', () => {
  const file1 = (`${__dirname}/../__fixtures__/file1.yaml`);
  const file2 = (`${__dirname}/../__fixtures__/file2.yaml`);
  const format = 'plain';

  expect(genDiff(file1, file2, format))
    .toEqual(resultPlainString);
});
