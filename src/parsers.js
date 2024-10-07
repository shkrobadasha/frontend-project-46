import { createRequire } from "module";
const require = createRequire(import.meta.url);
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

export const LetsParse = (readingFile) => {
  const format = path.extname(readingFile);
  if (format === '.json') {
      return JSON.parse(fs.readFileSync(readingFile));
  }else if (format === '.yml' || format === '.yaml'){
    return yaml.load(fs.readFileSync(readingFile, "utf8"));
  }
}



//поправить бейдж для тест ковередж и сделать чтобы тесты работали 




