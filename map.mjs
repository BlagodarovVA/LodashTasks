import _ from 'lodash';

// let newArr = [1, 2, 3].map(function (item) {
// 	return item;
// });

// let newLodashArr = _.map([1, 2, 3], function (item) {
// 	return item;
// });

// console.log(newArr, newLodashArr);

const users = [
	{
		id: 1,
		name: 'Vasya',
	},
	{
		id: 2,
		name: 'Fedor',
	},
	{
		id: 3,
		name: 'Frosya',
	},
];

let ids1 = _.map(users, function (item) {
	return item.id;
});

let ids2 = _.map(users, 'id');

console.log(ids1);
console.log(ids2);
