import {FETCH_RACES_REQUEST, FETCH_RACES_SUCCESS, FETCH_RACES_FAILURE} from './racesTypes';

const initialData = {
    loading: false,
    races: [],
    error: ''
}

const racesReducer = (state=initialData, action) => {
    switch(action.type){
        case FETCH_RACES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_RACES_SUCCESS:
            return {
                ...state,
                loading: false,
                races: [...action.payload],
                error: ''
            }
        case FETCH_RACES_FAILURE:
            return {
                ...state,
                loading: false,
                races: [],
                error: action.payload
            } 
        default: return state       
    }
}

export default racesReducer;