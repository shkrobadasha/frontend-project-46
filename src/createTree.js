import _ from 'lodash';

const findDifferences = (obj1, obj2) => _.union(Object.keys(obj1), Object.keys(obj2)).sort()
  .map((key) => {
    if (Object.prototype.hasOwnProperty.call(obj1, key)
    && Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { nodeName: key, children: findDifferences(obj1[key], obj2[key]), type: 'nested' };
      }
      if (obj1[key] !== obj2[key]) {
        return {
          nodeName: key, type: 'update', beforeValue: obj1[key], afterValue: obj2[key],
        };
      }
    }
    if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
      return { nodeName: key, type: 'add', value: obj2[key] };
    }
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      return { nodeName: key, type: 'remove', value: obj1[key] };
    }
    return { nodeName: key, type: 'unchanged', value: (obj1[key]) };
  });

export default findDifferences;
