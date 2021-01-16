import {ActionType, createAction, createAsyncAction} from 'typesafe-actions'
import {IPagingData, PictureModel, PicturePreviewModel} from "./types";

export enum ActionNames {
    GET_IMAGES_LIST = '[Gallery] Get Images List',
    GET_IMAGES_LIST_SUCCESS = '[Gallery] Get Images List Success',
    GET_IMAGES_LIST_FAILED = '[Gallery] Get Images List Failed',

    GET_CURRENT_IMAGE = '[Gallery] Get Current Image',
    GET_CURRENT_IMAGE_SUCCESS = '[Gallery] Get Current Image Success',
    GET_CURRENT_IMAGE_FAILED = '[Gallery] Get Current Image Failed',

    SET_PAGE_NUMBER_IMAGES = '[Gallery] Set Page Number Images',
}

export const getImages = createAsyncAction(
    ActionNames.GET_IMAGES_LIST,
    ActionNames.GET_IMAGES_LIST_SUCCESS,
    ActionNames.GET_IMAGES_LIST_FAILED
)<undefined, IPagingData<PicturePreviewModel>, Error>();

export const getImage = createAsyncAction(
    ActionNames.GET_CURRENT_IMAGE,
    ActionNames.GET_CURRENT_IMAGE_SUCCESS,
    ActionNames.GET_CURRENT_IMAGE_FAILED
)<undefined, PictureModel, Error>();

export const increasePageNumberImages = createAction(ActionNames.SET_PAGE_NUMBER_IMAGES)<number>();

export type TGalleryActions = ActionType<typeof getImages | typeof increasePageNumberImages | typeof getImage>