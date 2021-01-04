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
        axios.get('http://ergast.com/api/f1/drivers.json?')
        .then(response => {
            const drivers = response.data.MRData.DriverTable.Drivers;
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
