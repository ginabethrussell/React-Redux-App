import {
        FETCH_STANDINGS_REQUEST, 
        FETCH_STANDINGS_SUCCESS, 
        FETCH_STANDINGS_FAILURE
        } from './standingsTypes';

const initialData = {
    loading: false,
    standings: [],
    error: ''
}

const standingsReducer = (state=initialData, action) => {
    switch(action.type){
        case FETCH_STANDINGS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_STANDINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                standings: action.payload,
                error: ''
            }
        case FETCH_STANDINGS_FAILURE:
            return {
                ...state,
                loading: false,
                standings: [],
                error: action.payload
            } 
        default: return state       
    }
}

export default standingsReducer;