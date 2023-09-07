import _ from 'lodash';

// удаляет ложные элементы, в том числе цифру 0 или пустую строку
console.log(_.compact([null, '', 0, 'vasya', NaN, undefined]));
// Аналогично на JS
console.log([null, '', 0, 'vasya', NaN, undefined].filter(Boolean));
