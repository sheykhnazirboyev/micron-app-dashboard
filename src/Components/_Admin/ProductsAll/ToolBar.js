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
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../../../_actions/productActions';
import { Box } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';

const EnhancedTableToolbar = (props) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [state, setstate] = useState("");

    const handleChange = (e) => {
        setstate(e.target.value);
        dispatch(searchProduct(e.target.value));
    }

    const handleCancel = () => {
        setstate("");
        dispatch(searchProduct(""));
    }


    return (
        <Toolbar className={classes.toolBar} >
            <Box component="span" className={classes.label}>
                <AssignmentIcon />
            </Box>
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">

                Products
            </Typography>
            <div className={classes.search}>
                <TextField
                    onChange={handleChange}
                    value={state}
                    id="standard-start-adornment"
                    placeholder="Search…"
                    InputProps={{
                        startAdornment:
                            <InputAdornment position="start">
                                <SearchIcon className={classes.icon} />
                            </InputAdornment>,
                        endAdornment: <InputAdornment position="end">
                            <IconButton onClick={handleCancel}>
                                <CloseIcon className={classes.icon} fontSize="small" />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </div>
            <Tooltip title="Add product">
                <IconButton aria-label="add category" component={Link} to="/admin/product/new" >
                    <LibraryAddIcon />
                </IconButton>
            </Tooltip>
        </Toolbar>
    );
};

export default EnhancedTableToolbar
