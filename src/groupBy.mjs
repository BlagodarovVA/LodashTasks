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

// нативный JS группировка
// let groupBy = function (list, prop) {
// 	return list.reduce(function (agregator, element) {
// 		(agregator[element[prop]] = agregator[element[prop]] || []).push(element);
// 		return agregator;
// 	}, {});
// };
// let res = groupBy(users, 'isActive');

// let res = _.groupBy(users, 'isActive');
let res = _.groupBy(users, function (user) {
	return user.isActive;
});

console.log(res);
