import React, {useCallback} from 'react';
import {PicturePreviewModel} from "../../../store/gallery/types";
import {useHistory} from "react-router";

interface IProps {
    picture: PicturePreviewModel
}

export const PictureItem: React.FC<IProps> = ({picture}) => {

    const history = useHistory();

    const goToPictureInfo = useCallback(() => {
        history.push(`/img/${picture.id}`)
    }, [history, picture]);

    return <img className={'gallery-img'} src={picture.cropped_picture} alt="" onClick={goToPictureInfo}/>
};