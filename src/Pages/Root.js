import React from 'react'
import {useSelector} from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

function Root() {
    const history = useHistory();

    const isAuth = useSelector(state => state.user.isAuth)

    if(isAuth){
        history.push()
    }
    return (
        <Redirect to = "/admin/login" />
    )
}

export default Root
