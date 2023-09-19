import _ from 'lodash';

let flatList = [
	{
		id: 1,
		name: 'lvl 1 item 1',
		parentId: null,
	},
	{
		id: 2,
		name: 'lvl 1 item 2',
		parentId: null,
	},
	{
		id: 3,
		name: 'lvl 2 item 3',
		parentId: 1,
	},
	{
		id: 4,
		name: 'lvl 3 item 4',
		parentId: 3,
	},
	{
		id: 5,
		name: 'lvl 3 item 5',
		parentId: 2,
	},
];

// 1. получить root элементы
// 2. проверить children есть ли у них children
// 3. если нету, возвращаем пустых детей.
// 4. если есть, рекурсивно проверяем детей у всех детей.

let addChildren = function (item) {
	let children = _.filter(flatList, function (childItem) {
		return childItem.parentId === item.id;
	});
	let nestedChildren = [];
	if (!_.isEmpty(children)) {
		nestedChildren = _.map(children, addChildren);
	}
	return _.assign({}, item, { children: nestedChildren });
};

let nestedList = _.chain(flatList)
	.filter(function (item) {
		return item.parentId === null;
	})
	.map(addChildren)
	.value();

console.log('nestedList', nestedList);

// [
// 	{
// 		id: 1,
// 		children: [
// 			{
// 				id: 3,
// 				children: [
// 					{
// 						id: 4,
// 						children: [],
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		children: [
// 			{
// 				id: 5,
// 				children: [],
// 			},
// 		],
// 	},
// ];
