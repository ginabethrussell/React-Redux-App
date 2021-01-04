import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDrivers } from '../redux/drivers/DriverActions';

function F1Drivers({driverData, fetchDrivers}) {
    useEffect(()=> {
        fetchDrivers();
    },[]);
   
    return driverData.loading ? (
        <h2>Loading</h2>
      ) : driverData.error ? (
        <h2>{driverData.error}</h2>
      ) : (
        <div>
          <h2>Drivers List</h2>
          <div>
            {driverData &&
              driverData &&
              driverData.map(driver => 
                <div>
                  <p>{driver.givenName} {driver.familyName}</p>
                </div>
            )}
          </div>
        </div>
      )
}

const mapStateToProps = (state) => {
    return {
        driverData: state.drivers
    }
}
const mapDispatchToProps = dispatch => {
    return {
      fetchDrivers: () => dispatch(fetchDrivers())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(F1Drivers);




