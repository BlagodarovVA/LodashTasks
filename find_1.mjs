import _ from 'lodash';

let users = [
	{
		id: 2,
		name: 'mike',
	},
	{
		id: 3,
		name: 'mike',
	},
	{
		id: 1,
		name: 'mike',
	},
];

let res = _.find(users, function (user) {
	return user.name === 'mike';
});

console.log('res:', res);
