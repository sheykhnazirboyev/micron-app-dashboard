import { useDispatch } from 'react-redux';
import { logOutUser, setCurrentUser } from '../_actions/userActions';
import setAuthToken from '../_actions/setAuthToken';
import isEmpty from 'is-empty';
import jwt_decode from 'jwt-decode';

function CheckAuth() {
    const dispatch = useDispatch();

    if (!isEmpty(localStorage.jsonwebtoken)) {
        const token = localStorage.jsonwebtoken;
        setAuthToken(token);
        const decodedToken = jwt_decode(token)
        dispatch(setCurrentUser(decodedToken));
        
        if (decodedToken.exp < Date.now() / 1000 ){
            dispatch(logOutUser());
        }
    }

    return null;
}

export default CheckAuth;
