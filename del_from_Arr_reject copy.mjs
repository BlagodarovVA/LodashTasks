import _ from 'lodash';

// reject - удаляет правильно. противоположен методу filter
let users = [
	{
		id: 1,
		name: 'Valery',
		isActive: false,
		likes: 90,
	},
	{
		id: 2,
		name: 'Diana',
		isActive: true,
		likes: 550,
	},
	{
		id: 3,
		name: 'Vasya',
		isActive: false,
		likes: 170,
	},
];

// проще написать через filter без отрицаний
let getPopularUsers = function (users) {
	return _.reject(users, function (user) {
		return !user.isActive || user.likes < 100;
	});
};

console.log(getPopularUsers(users));

// let res = _.reject(arr, function (element) {
// 	return element.id === 1;
// });
// let res = _.reject(arr, ['id', 1]);
// console.log('arr:', arr);
// console.log('res:', res);
