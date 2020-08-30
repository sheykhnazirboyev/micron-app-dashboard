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
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, editCategory, deleteCategory, createCategory, clearCategories } from '../../../_actions/categoryActions';
import validateCategory from "../../../helpers/validation/category";
import {useHistory} from 'react-router-dom';
import EnhancedTableToolbar from './ToolBar';
import useStyles from './styles';
import { isEmpty } from 'lodash';
import { TextField } from '@material-ui/core';
import Pagination from '../Pagination/Pagination';


export default function SimpleTable() {
  const classes = useStyles();
  const history = useHistory();
  const categories = useSelector(state => state.category.categories);


  const dispatch = useDispatch();

  const [Edting, setEdting] = useState("");
  const [Title, setTitle] = useState("");
  const [InputErrors, setInputErrors] = useState({});
  const [newRow, setnewRow] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleGetCategories = () => {
    dispatch(getAllCategories(history));
  }

  useEffect(() => {
    handleGetCategories();

    return () => {
      dispatch(clearCategories())
    }
  }, []);

  const handleEdit = (row) => {
    if (isEmpty(row)) {
      // If  editing field is close but error is consists
      setInputErrors({});
      setTitle("");
    }
    setEdting(row._id);
    setTitle(row.title);
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = () => {
    const { isValid, errors } = validateCategory({ title: Title });
    
    if (!isValid) {
      setInputErrors(errors);
      return;
    }

    dispatch(editCategory(Edting, Title, history))

    setEdting({});
    setTitle("")
  }

  const handleDelete = (id) => {
    dispatch(deleteCategory(id, history))
  }

  let rows = categories;

  const toggleAddRow = (val) => {
    if (!val) {
      setTitle("");
      setInputErrors({})
    }
    setnewRow(val);
  }

  const handleAddRow = () => {
    const { isValid, errors } = validateCategory({ title: Title });
    if (!isValid) {
      setInputErrors(errors);
      return;
    }
    dispatch(createCategory(Title))
    setTitle("");
    setnewRow(false);
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
      <Paper className={classes.paper}>
        <EnhancedTableToolbar toggleAddRow={toggleAddRow} />
        <TableContainer component={Paper} className={classes.paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* This row for createing categories */}
              {
                newRow &&
                <TableRow >
                  <TableCell component="th" scope="row">No</TableCell>
                  <TableCell component="th" scope="row">
                    <TextField
                      error={!isEmpty(InputErrors.title) && isEmpty(Title)}
                      helperText={InputErrors.title}
                      placeholder="Type here"
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <IconButton onClick={() => handleAddRow()}>
                        <CheckIcon />
                      </IconButton>
                    </div>

                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => toggleAddRow(false)}>
                      <CloseIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              }

              {categories.map((row, i) => (
                <TableRow key={row._id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {
                      row._id === Edting ?
                        <TextField
                          error={!isEmpty(InputErrors) && isEmpty(Title)}
                          helperText={!isEmpty(InputErrors) ? InputErrors.title :""}
                          defaultValue={row.title}
                          onChange={handleChange}
                          inputProps={{ 'aria-label': 'description' }}
                        />
                        : row.title
                    }
                  </TableCell>
                  <TableCell align="right">
                    {
                      row._id === Edting ?
                        <div>
                          <IconButton onClick={() => handleSubmit()}>
                            <CheckIcon />
                          </IconButton>
                          <IconButton onClick={() => handleEdit({})}>
                            <CloseIcon />
                          </IconButton>
                        </div>
                        :
                        <IconButton onClick={() => handleEdit(row)}>
                          <EditIcon />
                        </IconButton>
                    }

                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleDelete(row._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}


            </TableBody>
          </Table>
          <Pagination
            rows={rows}
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
