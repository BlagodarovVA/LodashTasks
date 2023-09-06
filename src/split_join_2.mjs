import _ from 'lodash';

let slug = toSlug('This is super quiz Вася');
// this-is-super-quiz
// encodeURI('sddee')

function toSlug(str) {
	let res = _.chain(str).toLower().split(' ').join('-').value();
	return encodeURI(res);
}

console.log(slug);
