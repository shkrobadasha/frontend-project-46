// выбор форматтера
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatting = (format, result) => {
  switch (format) {
    case 'stylish':
      return stylish(result);
    case 'plain':
      return plain(result);
    case 'json':
      return json(result);
    default:
      return stylish(result);
  }
};

export default formatting;
