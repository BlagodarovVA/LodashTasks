import _ from 'lodash';
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

// нативный JS
// let res = users.sort(function (user1, user2) {
// 	return user1.likes > user2.likes ? 1 : -1;
// });

// 3 аргумент - порядок сортировки. можно сортировать по нескольким полям
let res = _.orderBy(users, ['likes'], ['desc']);

console.log('res:', res);
