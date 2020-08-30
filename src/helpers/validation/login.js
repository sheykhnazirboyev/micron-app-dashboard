import isEmpty from 'is-empty';
import Validator from 'validator'

export default function(data){
    const errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    } else if(!Validator.isEmail(data.email)){
        errors.email = "Invalid email ";
    }

    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    } if(!Validator.isLength(data.password, {min: 8})){
        errors.password = "Password must be at least 8 characters";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}