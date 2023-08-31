import _ from 'lodash';

let users = [
	{
		id: 1,
		name: 'Valery',
		isActive: true,
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

// есть хоть один
let isSomeActive = _.some(users, { isActive: true }); //{ isActive: true, likes: 550 }

// все соответствуют
let isAllActive = _.every(users, function (user) {
	return user.isActive === true;
});

console.log('isSomeActive:', isSomeActive);
console.log('isAllActive:', isAllActive);
