import React from 'react'
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LinearProgress from '@material-ui/core/LinearProgress';

import useStyles from './styles';
import { fileUpload, toggleFileUploader } from '../../../_actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'is-empty';
import {serverApi} from '../../../api';
import { toggleSnackBar } from '../../../_actions/appActions';
import AppConfig from '../../../constants';


function FileUpload({ setImages, Images, CoverImage, setCoverImage, Errors }) {
    const classes = useStyles();
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch();
    const [error, setError] = React.useState("")
    const uploading = useSelector(state => state.product.fileUploading);

    
    const handleDrop = (files) => {
        if (Images.length === 4) {
            return;
        }
        dispatch(toggleFileUploader(true));
        dispatch(fileUpload(files))
            .then(res =>  {
                dispatch(toggleFileUploader(false));
                setImages([...Images, res.data.image])
            } )
            .catch(err => {
                dispatch(toggleFileUploader(false));
                if(err.response){
                    if(err.response.status === 403){
                        return dispatch(toggleSnackBar({status:true, type:"error", msg: "You have no access to this action"}))
                    }
                } else {
                    return dispatch(toggleSnackBar({status:true, type:"error", msg: "You have no access to this action"}))
                }
                
                
            });
    }

    const handleChange = (event) => {
        setCoverImage(event.target.value);
    };

    const handleDelete = (image) => {
        const index = Images.indexOf(image);
        const newImages = [...Images];
        if(user.user && user.user.role !== "admin"){
            dispatch(toggleSnackBar({ status: true, type: "error", msg: "You have no access to this action" }));
            return;
        }
        if (image === CoverImage) {
            setError(image)
            return;
        }

        if (index >= 0) {
            newImages.splice(index, 1);
            setImages(newImages)
        }

    }

    const onError = (e) => {
        e.target.src = AppConfig.imgNotFound;
    }

    return (
        <div className={classes.root} >
            <Grid container className={classes.dropZone} >
                <Grid item xs={6}  >
                    <Dropzone
                        onDrop={handleDrop}
                        multiple={false}
                        maxSize={80000000}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()} className={classes.dropBox}>
                                <input {...getInputProps()} />
                                <span>
                                    <CloudUploadIcon />
                                    <br />
                                    Upload File
                                </span>

                            </div>
                        )}

                    </Dropzone>
                        {
                            !isEmpty(Errors.images) && isEmpty(Images) && <p style={{ color: "red", textAlign: "left" }}>Images Field is required</p>
                        }
                        {
                            uploading && <LinearProgress style = {{ width: "200px", margin:"1em 0em" }} />
                        }
                </Grid>
            </Grid>
            <div className={classes.listImages}>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="main_image" name="main_image" value={CoverImage} onChange={handleChange}>
                        <Grid container spacing={2}  >
                            {
                                Images.map((image, i) =>
                                    <Grid item xs={6} sm={3} key={i} className={classes.item} >
                                        <div className={classes.media}>
                                            <img
                                                className={classes.image}
                                                src={`${serverApi}/${image}`}
                                                alt={`${serverApi}/${image}`}
                                                onError = {(e) => onError(e)}

                                            />
                                            <div className={classes.darkWindow} onClick={() => handleDelete(image)}>
                                                {
                                                    error === image ?
                                                        <span className={classes.error}>
                                                            You can't delete cover image
                                                        </span> :
                                                        <DeleteOutlineIcon className={classes.deleteIcon} />
                                                }
                                            </div>
                                        </div>
                                        <FormControlLabel value={image} control={<Radio />} label="Cover" />
                                    </Grid>
                                )}
                        </Grid>
                        {
                            !isEmpty(Errors.main_image) && isEmpty(CoverImage) && <p style={{ color: "red", textAlign: "left" }}>Cover Image Field is required</p>
                        }
                    </RadioGroup>
                </FormControl>
            </div>

        </div>

    )
}

export default FileUpload
