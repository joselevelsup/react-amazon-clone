import axios from "axios";

import {
    FETCHING_ITEM,
    ITEM_SUCCESS,
    ITEM_FAILURE
} from "../constants/itemDetail.constants";

export function itemRetrieve(id){
    return (dispatch) => {
        dispatch(gettingItemData());
        
        axios.get("/api/item/"+id).then((resp) => {
            dispatch(gotItemData(resp.data));
        }).catch(err => dispatch(failedItemData(err)));
    }
}


export function gettingItemData(){
    return {
        type: FETCHING_ITEM
    }
}

export function gotItemData(data){
    return {
        type: ITEM_SUCCESS,
        data
    }
}

export function failedItemData(err){
    return {
        type: ITEM_FAILURE,
        err
    }
}
