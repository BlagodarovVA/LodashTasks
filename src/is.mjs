import _ from 'lodash';

console.log('сравнение массивов:', _.isEqual([1, 2, 3], [1, 2, 3]));

console.log('проверка на путоту1:', _.isEmpty([]));

let arr = [1, 'sdf', null];
console.log('проверка на путоту2:', _.isEmpty(arr));

let user;

if (_.isNil(user)) {
	console.log('Пользователь не определен');
} else {
	console.log(user);
}
