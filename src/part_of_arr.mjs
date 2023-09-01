import _ from 'lodash';

let users = [
	{
		id: 1,
		name: 'Valery',
		isActive: true,
		age: 32,
	},
	{
		id: 2,
		name: 'Diana',
		isActive: true,
		age: 26,
	},
	{
		id: 3,
		name: 'Vasya',
		isActive: false,
		age: 2,
	},
];

let num = [1, 2, 3];

let res = _.chain(num).head().value();
console.log('res:', res);

// первый элемент
console.log(_.head(num));

// все кроме первого
console.log('tail: ', _.tail(num));
console.log('js tail:', num.slice(1));

// последний элемент
console.log('last: ', _.last(num));

// все кроме последнего элемента
console.log('initial: ', _.initial(num));

//-------------------------------- строка ---------------------------
let str = 'fedor';

let head = _.chain(str).head().value();
console.log('head:', head);

// строка разложена на массив
let tail = _.chain(str).tail().value();
console.log('tail1:', tail);

// объединяем снова массив в строку
tail = tail.join('');
console.log('tail2:', tail);

// строка в массив все кроме последнего элемента
console.log('initial: ', _.initial(str));
console.log('js initial: ', str.slice(0, -1));
