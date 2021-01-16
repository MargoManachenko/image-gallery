import React, {useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom'
import {getCurrentImage} from "../../store/gallery/gallery.thunk";
import {useDispatch} from "react-redux";
import {useReduxState} from "../../helpers/use-redux-state";
import {Loader} from "../../shared/loader";

export const PictureInfo = () => {
    const {gallery: {currentPicture, loadingCurrentPicture}} = useReduxState();
    // @ts-ignore
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentImage(id))
    }, [dispatch, id]);

    const isLoading = useMemo(() => {
        return loadingCurrentPicture || (currentPicture && currentPicture.id !== id);
    }, [loadingCurrentPicture, currentPicture, id]);

    return <div className={'wrapper'}>
        {isLoading && <Loader/>}
        {currentPicture && !isLoading &&
        <div>
            <img src={currentPicture.full_picture} alt=""/>
            <div>
                <p>Author: {currentPicture.author}</p>
                <p>Camera: {currentPicture.camera}</p>
                <p>Tags: {currentPicture.tags}</p>
            </div>
        </div>
        }
    </div>
};