import _ from 'lodash';

// надо так
// [
// 	{
// 		config_key: 100,
// 		location_key: 32,
// 		autoassign: 1,
// 	},
// 	{
// 		config_key: 100,
// 		location_key: 22,
// 		autoassign: 1,
// 	},
// ];

let loc = [
	{
		location_key: [32, 22, 11],
		autoassign: 1,
	},
	{
		location_key: [41, 42],
		autoassign: 0,
	},
];

let bulcConfig = [
	{
		dataValues: {
			config_key: 100,
		},
	},
	{
		dataValues: {
			config_key: 200,
		},
	},
];

// let result = _.map(loc, function (locEl, index) {
// 	return _.map(locEl.location_key, function (locationKey) {
// 		return {
// 			config_key: bulcConfig[index].dataValues.config_key,
// 			location_key: locationKey,
// 			autoassign: locEl.autoassign,
// 		};
// 	});
// });

// let flattenedRes = _.flatten(result);
// console.log('flattenedRes', flattenedRes);

let configs = _.chain(loc).map(getConfigs).flatten().value();

function getConfigs(locEl, index) {
	return _.map(locEl.location_key, function (locationKey) {
		return {
			config_key: bulcConfig[index].dataValues.config_key,
			location_key: locationKey,
			autoassign: locEl.autoassign,
		};
	});
}

console.log('configs', configs);
