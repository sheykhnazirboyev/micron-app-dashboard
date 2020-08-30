import React, { useState } from 'react'
import useStyles from './styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon from '@material-ui/icons/Close';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import {useDispatch} from 'react-redux';
import {searchCategory, getAllCategories} from '../../../_actions/categoryActions';



const EnhancedTableToolbar = (props) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [state, setstate] = useState("");

    const handleChange = (e) => {
        setstate(e.target.value);
        dispatch(searchCategory(e.target.value));
    }

    const handleCancel = () => {
        setstate("");
        dispatch(getAllCategories());
    }


    return (
        <Toolbar className={classes.toolBar} >
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                Categories
          </Typography>
        </Toolbar>
    );
};

export default EnhancedTableToolbar
