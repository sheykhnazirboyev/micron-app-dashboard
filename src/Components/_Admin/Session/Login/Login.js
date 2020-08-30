import React, {useEffect} from 'react'
import useStyles, { CssTextField, ColorButton } from '../styles';
import validateLogin from "../../../../helpers/validation/login";
import { setValidationErrors, loginUser } from '../../../../_actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from 'is-empty';


import Paper from '@material-ui/core/Paper';
import { Toolbar, Typography, Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';

import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import EmailIcon from '@material-ui/icons/Email';
import { useHistory, Link, useLocation } from 'react-router-dom';

function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const errors = useSelector(state => state.user.validationErrors);
    const isAuth = useSelector(state => state.user.isAuth)
    const [values, setValues] = React.useState({
        email: "",
        password: '',
    });

    useEffect(() => {
        dispatch(setValidationErrors({}));
    },[])

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { errors, isValid } = validateLogin(values);
        if (!isValid) {
            dispatch(setValidationErrors(errors));
            return;
        }
        dispatch(loginUser(values, history, "/admin"));
    }
    
    if(isAuth && location.pathname === "/login"){
        history.push("/admin");
    }
    return (
        <div className={classes.root}>
            <div className={classes.darkOverflow}>
                <Paper className={classes.paper}>
                    <Toolbar className={classes.Toolbar}>
                        <div className={classes.header}>
                            <Typography variant="h6" display="block" >
                                Login
                            </Typography>

                            <div className={classes.icons}>
                                <IconButton className={classes.icon}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton className={classes.icon}>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton className={classes.icon}>
                                    <Icon className="fa fa-google" />
                                </IconButton>
                            </div>
                        </div>
                    </Toolbar>
                    <div className={classes.form}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <CssTextField
                                        className={classes.margin}
                                        id="custom-css-standard-input1"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        error={!isEmpty(errors.email) }
                                        helperText={!isEmpty(errors.email) ? errors.email : ""}
                                        label="Email"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                >
                                                    <EmailIcon />
                                                </IconButton>
                                            </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <CssTextField
                                        className={classes.margin}
                                        id="custom-css-standard-input"
                                        label="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        error={!isEmpty(errors.password)}
                                        helperText={!isEmpty(errors.password) ? errors.password : ""}
                                        type={values.showPassword ? "text" : "password"}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ?
                                                        <Visibility />
                                                        : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid>
                                    <Typography variant="caption" className={classes.caption}>
                                        Don't have an account ?
                                        <Link to="/admin/register" className={classes.link}>
                                            Register
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item container justify="center" >
                                    <ColorButton type="submit" variant="outlined" color="primary" className={classes.margin}>
                                        Login
                                    </ColorButton>
                                </Grid>
                            </Grid>
                        </form>

                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Login
