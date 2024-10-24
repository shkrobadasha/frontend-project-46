// выбор форматтера
import stylish from './stylish.js';
import plain from './plain.js';

const formatting = (format, result) => {
  switch (format) {
    case 'stylish':
      return stylish(result);
    case 'plain':
      return plain(result);
    default:
      return stylish(result);
  }
};

export default formatting;
