//здесь построение ast-дерева
//Для его реализации лучше выбрать структура массив. 
//Каждый возвращаемый узел лучше описывать в обьекте
/*{
  name,
  type: add | remove | update | nested | unchanged,
  beforeValue, //какое значение было до изменения
  afterValue,//какое значение стало после 
  children, - скорее всего массив с обьектами-детьми
  //узел у нас без + и без -
}*/
import _ from 'lodash';

//мы передаем в функцию два лбьекта для сравнения и получаем разницу - массив с обьектами-ключами

export const findDifferences = (obj1, obj2) => _.union(Object.keys(obj1), Object.keys(obj2)).sort()
  .map((key) => {
    if (Object.prototype.hasOwnProperty.call(obj1, key) &&
    Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { name: key, children: findDifferences(obj1[key], obj2[key]), type: 'nested'};
      }
      if(obj1[key] != obj1[key]){
        return { name: key, type: 'update', beforeValue: obj1[key], afterValue: obj2[key]};
      }
    }
    if (!Object.prototype.hasOwnProperty.call(obj1, key)){
      return { name: key, type: 'add', value: obj2[key]}
    }
    if (!Object.prototype.hasOwnProperty.call(obj2, key)){
      return { name: key, type: 'remove', value: obj1[key]}
    }
    return { name: key, type: 'unchanged', value: (obj1[key])}
  });

