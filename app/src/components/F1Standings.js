import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchStandings } from '../redux/standings/standingsActions';

import './F1Standings.css';

function F1Drivers({standingsData, fetchStandings}) {
  const [year, setYear] = useState('current');

    useEffect(()=> {
      fetchStandings(year);
    },[]);

    const years = [];
      for(let i = 1950; i < 2020; i++){
        years.push(i)
    }
    // console.log(years)
    const handleChange = (e) => {
      setYear(e.target.value);
      console.log(e.target.value)
    }
   
    return standingsData.loading ? (
        <h2>Loading</h2>
      ) : standingsData.error ? (
        <h2>{standingsData.error}</h2>
      ) : (
        <div className='standings-page'>
          <h2>{ year } Season Standings</h2>
          <div className='season-selector'>
            <label htmlFor='year'>Select Season</label>
            <select name='year'  id='year' value={year} onChange={handleChange}>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
              <option value='current'>Current</option>
            </select>
            <button className='select-season-btn' onClick={() => fetchStandings(year)}>View Standings</button>
          </div>
          <div className='standings-wrapper'>
            {standingsData &&
              standingsData &&
              standingsData.map(driver => 
                <div className='driver-wrapper' key={driver.Driver.permanentNumber}>
                  <p>{driver.position}. {driver.Driver.givenName} {driver.Driver.familyName}</p>
                  <p>Nationality: {driver.Driver.nationality}</p>
                  <p>Date of Birth: {driver.Driver.dateOfBirth}</p>
                  <p>Team: {driver.Constructors[0].name}</p>
                  <p>Wins: {driver.wins}</p>
                  <p>Total Points: {driver.points}</p>
                  <a href={driver.Driver.url} target='_blank'>Biography</a>
                </div>
            )}
          </div>
        </div>
      )
}

const mapStateToProps = (state) => {
    return {
        standingsData: state.standings.standings
    }
}
const mapDispatchToProps = dispatch => {
    return {
      fetchStandings: (year) => dispatch(fetchStandings(year))
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

