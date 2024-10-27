// выбор форматтера
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatting = (format, result) => {
  switch (format) {
    case 'stylish':
      return stylish(result).trim();
    case 'plain':
      return plain(result).trim();
    case 'json':
      return json(result).trim();
    default:
      return stylish(result).trim();
  }
};

export default formatting;
