import { cwd } from 'node:process';
import { createRequire } from "module";
import _ from 'lodash';

const require = createRequire(import.meta.url);
const path = require('path');

export const letsParse = (readingFile) => JSON.parse(readingFile);


export const normalName = (fileName) => {
    const pathOfFile = fileName;
    if (!fileName.startsWith('/')) {
        const currentDirectory = cwd();
        console.log(currentDirectory)
        return path.resolve(`${currentDirectory}`, fileName);
    }
    return pathOfFile;
}

export const genDiff = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.union(keys1, keys2); //уникальные ключи
  
    const result = {};
    for (const key of keys) {
      if (!obj1.hasOwnProperty(key)) {
        result['+ '+`${key}`] = obj2[key]; //+
      
      } else if (!obj2.hasOwnProperty(key)) {
        result['- '+`${key}`] = obj1[key]; //-
      } else if (obj1[key] !== obj2[key]) {
        result['- '+`${key}`] = obj1[key];
        result['+ '+`${key}`] = obj2[key];
      } else {
        result[key] = obj1[key];
      }
    }
    
    const totalResult = Object.entries(result);
    totalResult.sort((a, b) => {
      let nameA = (a[0].startsWith('+') || a[0].startsWith('-')) ? a[0].slice(2) : a[0]
      let nameB = (b[0].startsWith('+') || b[0].startsWith('-')) ? b[0].slice(2) : b[0]
    
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    
    return getFormattedOutput(totalResult)
  }

const getFormattedOutput = (arr) => {
  let result = '{\n';
  arr.forEach((item) => {
    if(!(item[0].startsWith('+') || item[0].startsWith('-'))){
      result += `    ${item[0]}: ${item[1]}\n`
    } else {
      result += `  ${item[0]}: ${item[1]}\n`
    }
  });
  result += '}'
  return result
};