import {
    SEARCHING,
    SEARCH_COMPLETE,
    SEARCH_FAILURE
} from "../constants/search.constants";

const initialState = {
    data: [],
    isFetching: true,
    error: false
};

export default function searchReducer(state = initialState, action){
    switch(action.type){
        case SEARCHING: 
            return {
                ...state,
                isFetching: true,
                error: false
            }

        case SEARCH_COMPLETE: 
            return {
                ...state,
                isFetching: false,
                data: action.data
            }

        case SEARCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        default:
            return state;
    }
}