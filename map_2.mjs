import _ from 'lodash';

const usersArr = [
	{
		id: 1,
		status: 'active',
		first_name: 'Vasya',
	},
	{
		id: 2,
		status: 'inactive',
		first_name: 'Fedor',
	},
	{
		id: 3,
		first_name: 'Frosya',
		status: 'active',
	},
];

let normalizeUsers = function (users) {
	return _.map(usersArr, function (item) {
		return {
			id: item.id,
			firstName: item.first_name,
			isActive: item.status === 'active',
		};
	});
};

let result = normalizeUsers(usersArr);
console.log('res:', result);

// let users = [
// 	{
// 		id: 1,
// 		firstName: 'Vasya',
// 		isActive: true
// 	},
// ];
