import React from 'react'
import useStyles from './styles';
import { Typography, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ServerError() {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <div className = {classes.content}>
                <Typography variant="h1" component="h2"  display = "block" 
                            gutterBottom  className = {classes.legend}>
                    500
                </Typography>
                <Typography variant = "h5" display = "block" gutterBottom className = {classes.subtitle} >
                    INTERNAL SERVER ERROR
                </Typography>
                <Typography varant = "caption"  display = "block" gutterBottom className = {classes.little}>
                        We are working to solve the problem, sorry for the inconvenience
                </Typography>
                <Divider />
                <Button variant="contained" color="primary"  size = "large"  className = {classes.btn} >
                    <Link  to = "/" className = {classes.link}>
                         HOME PAGE
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default ServerError;
