import {
    FETCHING_ITEM,
    ITEM_SUCCESS,
    ITEM_FAILURE
} from "../constants/itemDetail.constants";

const initialState = {
    data: [],
    isFetching: true,
    error: false
};

export default function itemDetailReducer(state = initialState, action){
    switch(action.type){
        case FETCHING_ITEM: 
            return {
                ...state,
                isFetching: true,
                error: false
            }

        case ITEM_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                data: action.data
            }

        case ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        default:
            return state;
    }
}