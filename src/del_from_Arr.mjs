import _ from 'lodash';

// let arr = [1, 2, 3, 2, 4, 2];
// не мутирует исходный массив, создает новый
// let res1 = _.without(arr, 2);
// console.log('arr:', arr);
// console.log('res1:', res1);

// удаляет элементы из исходного массиа и возвращает их ы результат
// var arr2 = [{ id: 1 }, { id: 2 }];
// let res2 = _.remove(arr2, function (element) {
// 	return element.id === 1;
// });
// console.log('arr2:', arr2);
// console.log('res2:', res2);

// reject - удаляет правильно. противоположен методу filter
var arr = [{ id: 1 }, { id: 2 }];
// let res = _.reject(arr, function (element) {
// 	return element.id === 1;
// });
let res = _.reject(arr, ['id', 1]);
console.log('arr:', arr);
console.log('res:', res);
