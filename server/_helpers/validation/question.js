const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
    data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.question = !isEmpty(data.question) ? data.question : '';

    if(Validator.isEmpty(data.firstname)) {
        errors.firstname = 'Firstname is required';
    }

    if(Validator.isEmpty(data.lastname)) {
        errors.lastname = 'Lastname is required';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(Validator.isEmpty(data.question)) {
        errors.question = 'Message text is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}