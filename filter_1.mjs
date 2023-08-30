import _ from 'lodash';

const users = [
	{
		id: 1,
		name: 'Valery',
		isActive: true,
	},
	{
		id: 2,
		name: 'Diana',
		isActive: false,
	},
];

// let res = _.filter(users, function (user) {
// 	return user.name === 'Valery';
// });

let res1 = _.filter(users, 'isActive');
let res2 = _.filter(users, ['isActive', false]);

// console.log('res1:', res1);
// console.log('res2:', res2);

// ---------------------------------

const products = {
	1: {
		name: 'Milk',
		price: 2.0,
	},
	2: {
		name: 'Meat',
		price: 15.5,
	},
	3: {
		name: 'Nut',
		price: 25.2,
	},
};

let res3 = _.filter(products, function (product) {
	return product.price > 10 && product.name != 'Nut';
});

console.log('res3:', res3);
