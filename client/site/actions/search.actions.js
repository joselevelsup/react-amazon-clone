import axios from "axios";
import {
    SEARCHING,
    SEARCH_COMPLETE,
    SEARCH_FAILURE
} from "../constants/search.constants";


export function beginSearch(search){
    return (dispatch) => {
        dispatch(searching());

        axios.get("/api/search-items?q="+search).then((resp) => {
            if(resp.data.success == false){
                dispatch(searchFailure(resp.data.reason));
            } else {
                dispatch(searchComplete(resp.data));
            }
        }).catch((err) => {
            dispatch(searchFailure(err));
        });
    }
}


export function searching(){
    return {
        type: SEARCHING
    }
}

export function searchComplete(data){
    return {
        type: SEARCH_COMPLETE,
        data
    }
}

export function searchFailure(err){
    return {
        type: SEARCH_FAILURE,
        err
    }
}