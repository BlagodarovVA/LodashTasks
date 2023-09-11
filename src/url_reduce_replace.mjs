import _ from 'lodash';

let initialUrl = '/posts/:postId/comments/:commentId';
let resultUrl = replaceParamsUrl(initialUrl, [
	{ from: 'postId', to: '1' },
	{ from: 'commentId', to: '3' },
]);

function replaceParamsUrl(url, params) {
	return _.reduce(
		params,
		function (acc, item) {
			return _.replace(acc, ':' + item.from, item.to);
		},
		url
	);
}
console.log('----------------');
console.log(resultUrl);
// TODO
// 1. пройтись по всем заменам в массиве
// 2. замена по каждому элементу
// 3. вернуть строку
