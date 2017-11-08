import {
    FETCHING_HOME_DATA,
    FETCHING_HOME_SUCCESS,
    FETCHING_HOME_FAILURE
} from "../constants/home.constants";

const initialState = {
    data: [],
    isFetching: true,
    error: false
};

export default function homeReducer(state = initialState, action){
    switch(action.type){
        case FETCHING_HOME_DATA: 
            return {
                ...state,
                isFetching: true,
                error: false
            }

        case FETCHING_HOME_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data.data
            }

        case FETCHING_HOME_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        default:
            return state;
    }
}