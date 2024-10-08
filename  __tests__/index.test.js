
import genDiff from '../src/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Comparing flat json files', () => {
    const file1 = (`${__dirname}/../__fixtures__/test-file1.json`);
    const file2 = (`${__dirname}/../__fixtures__/test-file2.json`);
    expect(genDiff(file1, file2))
    .toEqual(
    "{\n    host: hexlet.io\n  - namee: test-file-1\n  - proxy: 11.11.11.11\n  + proxy: 22.22.22.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}"
    );
  });

test('Comparing flat yaml files', () => {
    const file1 = (`${__dirname}/../__fixtures__/test-file1.yaml`);
    const file2 = (`${__dirname}/../__fixtures__/test-file2.yaml`);

    expect(genDiff(file1, file2))
    .toEqual(
    "{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}"
    );
  });