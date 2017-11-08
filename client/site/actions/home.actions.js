import {
    FETCHING_HOME_DATA,
    FETCHING_HOME_SUCCESS,
    FETCHING_HOME_FAILURE
} from "../constants/home.constants"

export function homeToDispatch(){
    return (dispatch) => {
        dispatch(gettingHomeData());
        fetch("/api/items")
          .then(res => res.json())
          .then((data) => {
            dispatch(gotHomeData(data))
          })
          .catch(err => dispatch(failedToGetHomeData(err)))
    }
}


export function gettingHomeData(){
    return {
        type: FETCHING_HOME_DATA
    };
}

export function gotHomeData(data){
    return {
        type: FETCHING_HOME_SUCCESS,
        data
    };
}

export function failedToGetHomeData(err){
    return {
        type: FETCHING_HOME_FAILURE,
        err
    };
}