import {FETCH_RACES_REQUEST, FETCH_RACES_SUCCESS, FETCH_RACES_FAILURE} from './racesTypes';
import axios from 'axios';

export const fetchRacesRequest = () => {
    return {
        type: FETCH_RACES_REQUEST
    }
}

export const fetchRacesSuccess = (races) => {
    return {
        type: FETCH_RACES_SUCCESS,
        payload: races
    }
}

export const fetchRacesFailure = (err) => {
    return {
        type: FETCH_RACES_FAILURE,
        payload: err
    }
}

export const fetchRaces = (year='current') => (dispatch) => {
    dispatch(fetchRacesRequest);
    axios.get(`https://ergast.com/api/f1/${year}.json`)
    .then(response => {
        console.log(response.data.MRData.RaceTable.Races);
        const races = response.data.MRData.RaceTable.Races;
        dispatch(fetchRacesSuccess(races))
    })
    .catch(err => {
        console.log(err);
        dispatch(fetchRacesFailure(err));
    })
}

// API get request for season race data
// http://ergast.com/api/f1/current.json
