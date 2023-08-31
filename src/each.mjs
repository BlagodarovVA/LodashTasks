import _ from 'lodash';

// [1, 2, 3].forEach(function (item) {
// 	console.log(item);
// });

// _.each([1, 2, 3], function (item, index) {
// 	console.log(item, index);
// });

// ------------------------------------

const products = {
	1: {
		name: 'Product 1',
	},
	2: {
		name: 'Product 2',
	},
};

// key - id
_.each(products, function (product, key) {
	console.log(product, key);
});

let productNames = [];
_.each(products, function (product) {
	productNames.push(product.name);
});
console.log('productNames:', productNames);
