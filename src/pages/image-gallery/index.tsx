import React, {useEffect} from 'react';
import {getAllImages} from "../../store/gallery/gallery.thunk";
import {useDispatch} from "react-redux";
import {useReduxState} from "../../helpers/use-redux-state";
import {PictureItem} from "./pictureItem";
import {Grid} from "@material-ui/core";

export const ImageGallery = () => {

    const {gallery: {pageCount, hasMore, loadingPicturesList, pictures, page}} = useReduxState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllImages(page))
    }, [dispatch, page]);

    return <div className={'wrapper'}>
        <h2>
            Image Gallery
        </h2>
        <Grid
            container justify="center" spacing={4}
        >
            {pictures.map((pic, index) => (<Grid key={index} item><PictureItem picture={pic}/></Grid>))}
        </Grid>
    </div>
};