import _ from 'lodash';

console.log('JS join:', ['j', 'o', 'i', 'n'].join(''));

console.log('_split:', _.split('vasya/diagnost', '/'));

console.log(_.chain('vasya/diagnost').split('/').head().value());

console.log('_join:', _.join(['vasya', 'diagnost'], '/'));

console.log(_.chain(['vasya', 'diagnost']).join('/').toUpper().value());
