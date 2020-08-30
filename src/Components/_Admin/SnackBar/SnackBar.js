import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSnackBar } from '../../../_actions/appActions';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const snackBar = useSelector(state => state.app.snackBar);

    const state = {
        vertical: 'top',
        horizontal: 'center',
    }

    const { vertical, horizontal } = state;


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(toggleSnackBar(false));
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackBar.status}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={snackBar.type}>
                    {snackBar.msg}
                </Alert>
            </Snackbar>
        </div>
    );
}
