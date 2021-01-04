import { FETCH_DRIVERS_REQUEST, FETCH_DRIVERS_SUCCESS, FETCH_DRIVERS_FAILURE } from './DriverTypes';
import axios from 'axios';

export const fetchDriversRequest = () => {
    return {
        type: FETCH_DRIVERS_REQUEST
    }
}

export const fetchDriversSuccess = (drivers) => {
    return {
        type: FETCH_DRIVERS_SUCCESS,
        payload: drivers
    }
}

export const fetchDriversFailure = (error) => {
    return {
        type: FETCH_DRIVERS_FAILURE,
        payload: error
    }
}

export const fetchDrivers = (dispatch) => {
    return (dispatch) => {
        dispatch(fetchDriversRequest);
        axios.get('http://ergast.com/api/f1/current/driverStandings.json')
        .then(response => {
            const drivers = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            dispatch(fetchDriversSuccess(drivers));
        })
        .catch(err => {
            console.log(err)
            const errMess = err.message;
            console.log(err);
            dispatch(fetchDriversFailure(errMess));
        })
    }
       
}
// http://ergast.com/api/f1/drivers.json?