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

export const fetchStandings = (year='current') => {
    return (dispatch) => {
        dispatch(fetchStandingsRequest);
        console.log("passed in year", year);
        console.log(`http://ergast.com/api/f1/${year}/driverStandings.json`)
        axios.get(`http://ergast.com/api/f1/${year}/driverStandings.json`)
        .then(response => {
            const standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            console.log(year, standings)
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