import _ from 'lodash';

let baseConfig = {
	apiURL: 'http://api.by',
	port: 4000,
};

let createExtConfig = function (config) {
	let clonedConfig = _.clone(config);

	// return _.assign({}, config, { host: 'http://google.by' });

	// // изменяется и исходный объект
	// config.host = 'http://google.by';
	// return config;

	clonedConfig.host = 'http://google.by';
	return clonedConfig;
};

let res = createExtConfig(baseConfig);

console.log('res config', res);
console.log('baseConfig', baseConfig);

let a = { b: { c: 1 } };
// не глубокое копирование
// let b = _.clone(a);

// глубокое клонирование
let b = _.cloneDeep(a);
b.b.f = 'opa';
console.log('b clone a:', a, b);
