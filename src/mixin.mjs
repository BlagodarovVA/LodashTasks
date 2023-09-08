import _ from 'lodash';

let capitalizeLast = function (str) {
	let lastSymbol = _.last(str);
	let initialSymbols = _.chain(str).initial().join('').value();
	return initialSymbols + _.capitalize(lastSymbol);
};

_.mixin({ capitalizeLast: capitalizeLast });

console.log('hello', capitalizeLast('hello'));

let res = _.chain('vasya').capitalizeLast().value();
console.log(res);
