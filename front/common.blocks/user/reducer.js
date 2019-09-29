import {SET_NAME} from './constants';
import {INIT} from '../redux/constants';

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case INIT:
        default:
            return {
                name: 'Anonymous'
            }
    }
}
