import _ from 'lodash';

const findDifferences = (obj1, obj2) => _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)))
  .map((key) => {
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { nodeName: key, children: findDifferences(obj1[key], obj2[key]), type: 'nested' };
      }
      if (obj1[key] !== obj2[key]) {
        return {
          nodeName: key, type: 'update', beforeValue: obj1[key], afterValue: obj2[key],
        };
      }
    }
    if (!_.has(obj1, key)) {
      return { nodeName: key, type: 'add', value: obj2[key] };
    }
    if (!_.has(obj2, key)) {
      return { nodeName: key, type: 'remove', value: obj1[key] };
    }
    return { nodeName: key, type: 'unchanged', value: (obj1[key]) };
  });

export default findDifferences;
