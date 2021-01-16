import React, {useEffect} from 'react';
import {getAllImages} from "../../store/gallery/gallery.thunk";
import {useDispatch} from "react-redux";
import {useReduxState} from "../../helpers/use-redux-state";

export const ImageGallery = () => {

    const {gallery: {pageCount, hasMore, loadingImages, pictures, page}} = useReduxState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllImages(page))
    }, [dispatch, page]);

    return <div>Image Gallery</div>
};