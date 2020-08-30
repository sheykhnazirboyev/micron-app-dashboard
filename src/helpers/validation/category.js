import isEmpty from 'is-empty';

export default function (data){
    
    const errors = {};
    if(isEmpty(data.title))
        errors.title = "Title field is required";
    else if(data.title.length < 3)
        errors.title = "Title field must be at least 3 characters" 
    return {
        errors,
        isValid: isEmpty(errors)
    }
}