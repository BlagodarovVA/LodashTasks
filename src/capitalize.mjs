import _ from 'lodash';

let capitalize = function (str) {
	let lower = _.toLower(str);
	let firstL = _.chain(lower).head().toUpper().value();
	let tail = _.chain(lower).tail().join('').value();
	return firstL + tail;
};

console.log(capitalize('vasya Fedorov'));

console.log(_.capitalize('vasya Fedorov'));
