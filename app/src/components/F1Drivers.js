import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDrivers } from '../redux/drivers/DriverActions';
import F1Car from '../F1-Car-Racing.png'

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
          <h1>Formula 1 - 2020 Racing</h1>
          <img src={F1Car} width='500px'/>
          <h2>Drivers Standings</h2>
          <div>
            {driverData &&
              driverData &&
              driverData.map(driver => 
                <div>
                  <p>{driver.position}</p>
                  <p>{driver.Driver.givenName} {driver.Driver.familyName}</p>
                  <p>Nationality: {driver.Driver.nationality}</p>
                  <p>Date of Birth: {driver.Driver.dateOfBirth}</p>
                  <p>Team: {driver.Constructors[0].name}</p>
                  <p>Wins: {driver.wins}</p>
                  <p>Total Points: {driver.points}</p>
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


// sample driverData object
// {
//   position: "1",
//   positionText: "1",
//   points: "347",
//   wins: "11",
//   Driver: {
//   driverId: "hamilton",
//   permanentNumber: "44",
//   code: "HAM",
//   url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
//   givenName: "Lewis",
//   familyName: "Hamilton",
//   dateOfBirth: "1985-01-07",
//   nationality: "British"
//   },
//   Constructors: [
//   {
//   constructorId: "mercedes",
//   url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
//   name: "Mercedes",
//   nationality: "German"
//   }
//   ]
//   }

