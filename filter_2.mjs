import _ from 'lodash';

const products = [
	{
		id: 1,
		name: 'Milk',
		price: '3$',
	},
	{
		id: 2,
		name: 'Meat',
		price: '10$',
	},
	{
		id: 3,
		name: 'Bread',
		price: '5$',
	},
];

let searchProducts = function (products, searchedValue) {
	return _.filter(products, function (product) {
		return product.name.includes(searchedValue);
	});
};

console.log(searchProducts(products, 'ea'));
