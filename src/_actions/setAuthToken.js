import axios from 'axios';
import isEmpty from 'is-empty';

export default function(token){
    if(!isEmpty(token)){
        axios.defaults.headers.common["x-auth-token"] = token;
    } else {
        delete axios.defaults.headers.common["x-auth-token"];
    }
}