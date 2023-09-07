import _ from 'lodash';

let state = {
	isLoading: false,
	data: null,
	error: null,
};

let newState = Object.assign({}, state, { isLoading: true });
console.log('result JS', '\n', state, '\n', newState);

let newState_ = _.assign({}, state, { isLoading: true });
console.log('result _', '\n', state, '\n', newState_);
