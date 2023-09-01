import _ from 'lodash';

let users = [
	{
		id: 1,
		name: 'Valery',
		isActive: true,
		age: 32,
	},
	{
		id: 2,
		name: 'Diana',
		isActive: true,
		age: 26,
	},
	{
		id: 3,
		name: 'Vasya',
		isActive: false,
		age: 2,
	},
];

let getYoungestUserMessage = function (users) {
	return _.chain(users)
		.filter('isActive')
		.orderBy('age')
		.map(function (user) {
			return user.name + ' is ' + user.age;
		})
		.head()
		.value();

	// let activeUsers = _.filter(users, 'isActive');
	// let sortedActiveUsers = _.orderBy(activeUsers, ['age']);
	// let firstUser = sortedActiveUsers[0];

	// return firstUser.name + ' is ' + firstUser.age;
};

console.log(getYoungestUserMessage(users));
