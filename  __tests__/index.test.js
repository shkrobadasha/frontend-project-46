import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';
import resultJsonString from '../__fixtures__/expectJson.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Comparing flat json files', () => {
  const file1 = (`${__dirname}/../__fixtures__/file1.json`);
  const file2 = (`${__dirname}/../__fixtures__/file2.json`);
  expect(genDiff(file1, file2))
    .toEqual(resultJsonString);
});

test('Comparing flat yaml files', () => {
  const file1 = (`${__dirname}/../__fixtures__/file1.yaml`);
  const file2 = (`${__dirname}/../__fixtures__/file2.yaml`);

  expect(genDiff(file1, file2))
    .toEqual(resultJsonString);
});
