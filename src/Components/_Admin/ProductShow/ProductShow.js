import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, clearSingleProduct } from '../../../_actions/productActions';
import { getAllCategories } from '../../../_actions/categoryActions';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography, Divider } from '@material-ui/core';
import Slides from './Slides';
import {useHistory} from 'react-router-dom';

function ProductShow(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getSingleProduct(props.productId, history));
        dispatch(getAllCategories(history));

        return () => {
            dispatch(clearSingleProduct(props.productId))
        }
    }, []);

    
    const product = useSelector(state => state.product.singleProduct);
    const images = product.images || [];

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper} >
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Slides images={[...images, product.main_image]} />
                    </Grid>
                    <Grid item xs={12} md={6}  className={classes.content}>
                        <Grid item xs={12}>
                            <div className={classes.header}>
                                <Typography dispatch="block" variant="h4">
                                    {product.name}
                                </Typography>
                                <Typography variant="caption" display="block" className={classes.mute} >
                                    <b>Customer reviews:</b> {product.reviews}
                                </Typography>
                                <Typography variant="caption" display="block" className={classes.mute} >
                                    <b>Avialability:</b> {product.avialability ? product.avialability : 0}
                                </Typography>
                            </div>
                            <Divider style={{ width: "80%" }} />
                        </Grid>
                        
                        <Grid item xs={12} >
                        
                            <div className={classes.body}>
                                <Typography variant="subtitle1" display="block" className={classes.mute} >
                                    <b>Category:</b> {product.category && product.category.title}
                                </Typography>
                                <Typography variant="subtitle1" display="block" className={classes.mute}>
                                    <b>Features</b> : {product.features}
                                </Typography>
                                <Typography variant="subtitle1" display="block" className={classes.mute}>
                                    <b>SKU:</b> {product.sku}
                                </Typography>
                                <Typography variant="subtitle1" display="block" className={classes.mute}>
                                    <b>New Price: </b> <span>{product.new_price}</span>
                                </Typography>

                            </div>

                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ProductShow
