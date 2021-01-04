import { FETCH_STANDINGS_REQUEST, FETCH_STANDINGS_SUCCESS, FETCH_STANDINGS_FAILURE } from './standingsTypes';
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

export const fetchStandings = (dispatch) => {
    return (dispatch) => {
        dispatch(fetchStandingsRequest);
        axios.get('http://ergast.com/api/f1/current/driverStandings.json')
        .then(response => {
            const standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            dispatch(fetchStandingsSuccess(standings));
        })
        .catch(err => {
            console.log(err)
            const errMess = err.message;
            console.log(err);
            dispatch(fetchStandingsFailure(errMess));
        })
    }
       
}
// http://ergast.com/api/f1/drivers.json?