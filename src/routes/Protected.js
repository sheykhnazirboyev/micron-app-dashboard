import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Protected({component: Component, ...rest}) {

    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <Route 
            {...rest}
            render = {props => 
                isAuth ? <Component {...props} />
                : <Redirect to = "/admin/login" />
             }
        />        
    )
}

export default Protected
