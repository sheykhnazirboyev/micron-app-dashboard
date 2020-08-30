import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import FileUpload from '../FileUpload'
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'

import validateProductForm from "../../../helpers/validation/product";

import { getAllCategories } from '../../../_actions/categoryActions';
import { uploadProduct, validationErr, updateSuccess } from '../../../_actions/productActions';
import isEmpty from 'is-empty';
import { withRouter, useHistory } from 'react-router-dom';




function ProductForm(props) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);
    const Errors = useSelector(state => state.product.uploadProductErr);
    const success = useSelector(state => state.product.upload_success)

    useEffect(() => {
        dispatch(getAllCategories(history));

        return () => {
            dispatch(updateSuccess(false));
            setImages([]);
            setCoverImage("");
            setstate({})
            dispatch(validationErr({}));
        }
    }, []);

    useEffect(() => {
        if (success) {
            window.scroll(0, 0);
            setTimeout(() => {
                props.history.push("/admin/product/all");
            }, 1000);
        }
    })

    const [state, setstate] = useState({
        name: "",
        categoryId: "",
        features: "",
        sku: "",
        new_price: "",
        old_price: "",
        avialability: ""
    });

    const [Images, setImages] = useState([]);
    const [CoverImage, setCoverImage] = useState("");

    const handleChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value });
    }

    const prepareImages = () => {
        const index = Images.indexOf(CoverImage);
        const newImages = [...Images];
        if (index >= 0) {
            newImages.splice(index, 1);
        }
        return newImages;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const images = prepareImages();
        console.log(images)
        const data = { ...state, main_image: CoverImage, images: images };
        const { errors, isValid } = validateProductForm(data);
        if (!isValid) {
            dispatch(validationErr(errors));
            return;
        }
        
        dispatch(uploadProduct(data));
        
    }
    
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.content}>
                    <FileUpload
                        Images={Images}
                        setImages={setImages}
                        CoverImage={CoverImage}
                        setCoverImage={setCoverImage}
                        Errors={Errors}
                    />
                    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container justify="space-between" className={classes.formRoot} spacing={3}>
                            <Grid item xs={12} sm={6} container justify="space-between"  >
                                <Grid item xs={12} >
                                    <TextField
                                        className={classes.formControl}
                                        error={!isEmpty(Errors.name) && isEmpty(state.name)}
                                        helperText={!isEmpty(Errors.name) && isEmpty(state.name) ? Errors.name : ""}
                                        fullWidth
                                        variant="outlined"
                                        id="standard-basic"
                                        label="Name"
                                        type="text"
                                        name="name"
                                        value={state.name}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                                        <Select
                                            error={!isEmpty(Errors.categoryId) && isEmpty(state.categoryId)}
                                            helperText={!isEmpty(Errors.categoryId) && isEmpty(state.categoryId) ? Errors.categoryId : ""}
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={state.categoryId}
                                            name="categoryId"
                                            onChange={handleChange}
                                            label="Category"
                                        >
                                            {
                                                categories.map((c, i) =>
                                                    <MenuItem key={c._id} value={c._id}>
                                                        {c.title}
                                                    </MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label="Features"
                                    multiline
                                    rows={5}
                                    value={state.features}
                                    onChange={handleChange}
                                    name="features"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={!isEmpty(Errors.new_price) && isEmpty(state.new_price)}
                                    helperText={!isEmpty(Errors.new_price) && isEmpty(state.new_price) ? Errors.new_price : ""}
                                    fullWidth
                                    id="new_price"
                                    label="New Price"
                                    value={state.new_price}
                                    onChange={handleChange}
                                    name="new_price"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={!isEmpty(Errors.sku) && isEmpty(state.sku)}
                                    helperText={!isEmpty(Errors.sku) && isEmpty(state.sku) ? Errors.sku : ""}
                                    fullWidth
                                    id="sku"
                                    label="SKU"
                                    value={state.sku}
                                    onChange={handleChange}
                                    name="sku"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={!isEmpty(Errors.old_price)}
                                    helperText={!isEmpty(Errors.old_price) ? Errors.old_price : ""}
                                    fullWidth
                                    id="old_price"
                                    label="Old Price"
                                    value={state.old_price}
                                    onChange={handleChange}
                                    name="old_price"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={!isEmpty(Errors.avialability)}
                                    helperText={!isEmpty(Errors.avialability) ? Errors.avialability : ""}
                                    fullWidth
                                    id="avialability"
                                    label="Avialability"
                                    value={state.avialability}
                                    onChange={handleChange}
                                    name="avialability"
                                    variant="outlined"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} container justify="flex-end">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                    type="submit"
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Paper>
        </div>
    )
}

export default withRouter(ProductForm)
