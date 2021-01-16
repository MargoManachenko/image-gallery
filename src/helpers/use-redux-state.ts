import { useSelector } from 'react-redux';
import {RootStateModel} from "../store/reducer";

export const useReduxState = () => {
    return useSelector((state: RootStateModel) => state);
};