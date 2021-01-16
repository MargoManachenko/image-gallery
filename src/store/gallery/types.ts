export interface IPagingData<T = any> {
    hasMore: boolean
    page: number
    pageCount: number
    pictures: Array<T>;
}

export const DEFAULT_PAGE_SIZE = 20;

export interface GalleryStateInterface {
    pictures: PicturePreviewModel[]
    hasMore: boolean | null
    page: number
    pageCount: number | null
    loadingImages: boolean;
}

export interface PicturePreviewModel {
    id: string,
    cropped_picture: string,
}