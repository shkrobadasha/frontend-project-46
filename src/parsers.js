import { createRequire } from "module";
const require = createRequire(import.meta.url);
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

export const letsParse = (nameOfFile) => {
  const format = path.extname(nameOfFile);
  if (format === '.json') {
      return JSON.parse(fs.readFileSync(nameOfFile));
  }else if (format === '.yml' || format === '.yaml'){
    return yaml.load(fs.readFileSync(fs.readFileSync(nameOfFile), "utf8"));
  }
}



//поправить бейдж для тест ковередж и сделать чтобы тесты работали 




