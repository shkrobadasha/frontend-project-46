import * as fs from 'fs';
import * as path from 'path';

export const getFormat = (nameOfFile) => path.extname(nameOfFile);

export const getContentOfFile = (nameOfFile) => fs.readFileSync(nameOfFile, 'utf-8');
