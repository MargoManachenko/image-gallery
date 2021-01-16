import React, {useCallback, useEffect} from 'react';
import {getAllImages} from "../../store/gallery/gallery.thunk";
import {useDispatch} from "react-redux";
import {useReduxState} from "../../helpers/use-redux-state";
import {PictureItem} from "./pictureItem";
import {Grid} from "@material-ui/core";
import {Loader} from "../../shared/loader";
import {Pagination} from "@material-ui/lab";
import {setPageNumberImages} from "../../store/gallery/gallery.actions";

export const ImageGallery = () => {

    const {gallery: {pageCount, loadingPicturesList, pictures, page}} = useReduxState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllImages(page))
    }, [dispatch, page]);

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPageNumberImages(value - 1));
    }, [dispatch]);

    return <div className={'wrapper'}>
        <h2>
            Image Gallery
        </h2>
        {loadingPicturesList && <Loader/>}
        <Grid
            container justify="center" spacing={4}
        >
            {pictures.map((pic, index) => (<Grid key={index} item><PictureItem picture={pic}/></Grid>))}
        </Grid>

        {pageCount &&
        <div className={'pagination-wrapper'}>
            <Pagination count={pageCount} page={page + 1} onChange={handleChange}/>
        </div>
        }
    </div>
};