import React from 'react'
import useStyles from './styles';
import { Paper, Icon, Typography, IconButton } from '@material-ui/core'
import clsx from 'clsx';

function Card({ subtitle, icon, count }) {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Paper elevation={3} className = {classes.paper}>
                <div className = {classes.header}>
                    <IconButton >
                        <Icon className=  {clsx(icon, classes.icon)} />
                    </IconButton>
                    <Typography variant="subtitle1" dispalay="block" className={classes.subtitle} >
                        {subtitle}
                    </Typography>
                </div>
                <div className = {classes.body}>
                    <Typography variant = "subtitle1" className = {classes.count}>
                        {count}
                    </Typography>
                </div>
            </Paper>
        </div>
    )
}

export default Card
