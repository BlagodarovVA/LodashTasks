import _ from 'lodash';

let random = function (from, to) {
	console.log('JS random:', from, '-', to);
	return Math.floor(Math.random() * (to - from + 1) + from);
};
console.log(random(1, 10));

console.log('_.random:', _.random(1, 10));
