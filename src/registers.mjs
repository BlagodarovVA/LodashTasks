import _ from 'lodash';

console.log('JS - ResulT'.toLowerCase());
console.log('JS -  ResulT'.toUpperCase());

// можно использовать в chain
console.log('_.toLower:', _.toLower('ResulT'));
console.log('_.toUpper:', _.toUpper('ResulT'));

console.log('_.chain:', _.chain('AUFF').toLower().split('').value());
