import isEmpty from 'is-empty';
import validator from "validator";

export default function(data){
    

    data.name = !isEmpty(data.name) ? data.name : "";
    data.categoryId = !isEmpty(data.categoryId) ? data.categoryId : "";
    data.new_price = !isEmpty(data.new_price) ? data.new_price : "";
    data.sku = !isEmpty(data.sku) ? data.sku : "";
    data.main_image = !isEmpty(data.main_image) ? data.main_image : "";

    const errors = {};

    if(validator.isEmpty(data.name)){
        errors.name = "Name field is required"
    } else if(!validator.isLength(data.name, { min: 3 })){
        errors.name = "Name must be at least 3 characters";
    }

    if(validator.isEmpty(data.categoryId)){
        errors.categoryId = "Category field is required"
    }

    if(validator.isEmpty(data.new_price)){
        errors.new_price = "Category field is required";
    } else if(parseInt(data.new_price) < 0){
        errors.new_price = "Price field must be positive"
    }

    if(!isEmpty(data.old_price) && parseInt(data.old_price) < 0){
        errors.old_price = "Old price filed must be positive"
    }

    if(!isEmpty(data.avialability) && parseInt(data.avialability) < 0){
        errors.avialability = "Avialability  filed must be positive"
    }

    if(validator.isEmpty(data.sku)){
        errors.sku = "SKU field is required";
    }
    
    if(validator.isEmpty(data.main_image)){
        errors.main_image = "Cover image field is required";
    }

    if(data.images.length <= 0){
        errors.images = "Images field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}