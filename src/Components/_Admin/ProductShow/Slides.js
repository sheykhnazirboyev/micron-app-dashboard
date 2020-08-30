import React from 'react';
import ImageGallery from 'react-image-gallery';
import useStyles from './styles';
import {serverApi} from "../../../api";
import './index.css';
import AppConfig from '../../../constants';

const baseUrl = serverApi;

function Slides({ images }) {

    const classes = useStyles();

    const onError = (e) => {
        e.target.src = AppConfig.imgNotFound;
    }

    images.map(i => console.log(`${baseUrl}/${i}`))

    const allImages = [];
    images.map((img) => allImages.push({ original: `${baseUrl}/${img}`, thumbnail: `${baseUrl}/${img}` }))

    return (
        <div className={classes.imgGallery} >
            <ImageGallery
                autoPlay
                disableKeyDown
                items={allImages}
                onError = {(e) => onError(e)}
            />
        </div>
    )
}

export default Slides
