import { 
        FETCH_STANDINGS_REQUEST, 
        FETCH_STANDINGS_SUCCESS, 
        FETCH_STANDINGS_FAILURE 
    } from './standingsTypes';

import axios from 'axios';

export const fetchStandingsRequest = () => {
    return {
        type: FETCH_STANDINGS_REQUEST
    }
}

export const fetchStandingsSuccess = (standings) => {
    return {
        type: FETCH_STANDINGS_SUCCESS,
        payload: standings
    }
}

export const fetchStandingsFailure = (error) => {
    return {
        type: FETCH_STANDINGS_FAILURE,
        payload: error
    }
}

export const fetchStandings = (year='current') => {
    return (dispatch) => {
        dispatch(fetchStandingsRequest);
        axios.get(`https://ergast.com/api/f1/${year}/driverStandings.json`)
        .then(response => {
            const standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            dispatch(fetchStandingsSuccess(standings));
        })
        .catch(err => {
            const errMess = err.message;
            dispatch(fetchStandingsFailure(errMess));
        })
    }
       
}
