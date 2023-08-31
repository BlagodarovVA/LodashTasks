import _ from 'lodash';

// let newArr = [1, 2, 3].map(function (item) {
// 	return item;
// });

// let newLodashArr = _.map([1, 2, 3], function (item) {
// 	return item;
// });

// console.log(newArr, newLodashArr);

const usersArr = [
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

let ids1 = _.map(usersArr, function (item) {
	return item.id;
});

let ids2 = _.map(usersArr, 'id');

console.log(ids1);
console.log(ids2);

// -------------------------------------

const usersObj = {
	1: {
		name: 'User #1',
	},
	2: {
		name: 'User #2',
	},
	3: {
		name: 'User #3',
	},
};

let ids = _.map(usersObj, function (user, id) {
	return Number(id);
});

console.log(ids);
