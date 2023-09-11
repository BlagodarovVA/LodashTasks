import _ from 'lodash';

let backendErrors = {
	email: {
		errors: [{ message: 'Не может быть пустым' }],
	},
	password: {
		errors: [
			{ message: 'Должны быть символы разных регистров' },
			{ message: 'Минимальная длина 8 символов' },
		],
	},
	passwordConfirmation: {
		errors: [{ message: 'Не должен совпадать с паролем' }],
	},
};

let humanReadableBackendErrors = _.map(backendErrors, function (value, field) {
	let fieldMessages = _.chain(value.errors).map('message').join(', ').value();
	return _.upperFirst(field) + ': ' + fieldMessages;
});

console.log(humanReadableBackendErrors);
