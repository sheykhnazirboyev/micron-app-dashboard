import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import Avatar from '@material-ui/core/Avatar';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, deleteProduct } from '../../../_actions/productActions';

import EnhancedTableToolbar from './ToolBar';
import useStyles from './styles';
import {Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { serverApi } from '../../../api';
import Pagination from '../Pagination/Pagination';



export default function SimpleTable() {
    const classes = useStyles();
    const history = useHistory();
    const products = useSelector(state => state.product.products);

    const dispatch = useDispatch();

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);


    useEffect(() => {
        dispatch(getAllProducts(history));
    }, []);


    const handleDelete = (id) => {
        dispatch(deleteProduct(id, history))
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <EnhancedTableToolbar />
                <TableContainer component={Paper} className={classes.paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell >Name</TableCell>
                                <TableCell >Prices</TableCell>
                                <TableCell >Catategory</TableCell>
                                <TableCell >Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {products.map((row, i) => (
                                <TableRow key={row._id}>
                                    <TableCell>
                                        <Typography variant = "subtitle1">
                                            {i+1}
                                        </Typography>
                                        </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Avatar alt="Remy Sharp"
                                            src={`${serverApi}/${row.main_image}`}
                                        />
                                    </TableCell>
                                    <TableCell >
                                        <Typography variant="subtitle1">
                                            {row.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography variant="subtitle1">
                                            {row.new_price}
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography variant="subtitle1">
                                            {row.category.title}
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <IconButton component={Link} to={`/admin/product/show/${row._id}`} >
                                            <VisibilityIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton component={Link} to={`/admin/product/edit/${row._id}`} >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(row._id)}>
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>

                                    </TableCell>
                                </TableRow>
                            ))}


                        </TableBody>
                    </Table>
                    <Pagination
                        rows={products}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableContainer>

            </Paper>

        </div>

    );
}
