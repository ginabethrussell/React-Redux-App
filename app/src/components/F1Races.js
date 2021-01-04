import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRaces } from '../redux/races/racesActions';

import './F1Races.css';

function F1Races({fetchRaces, raceData}) {
    useEffect(()=> {
        fetchRaces();
    }, [])
    console.log(raceData);

    return raceData.loading ? (
        <h2>Loading</h2>
      ) : raceData.error ? (
        <h2>{raceData.error}</h2>
      ) : (
        <div className='races-page'>
          
          <h2>2020 Season Races</h2>
          <div className='races-wrapper'>
            {raceData && raceData.map(race => (
                <div className='race-wrapper' key={race.url}>
                    <p>Round: {race.round} {race.raceName}</p>
                    <p>Date: {race.date}</p>
                    <p>{race.Circuit.circuitName}</p>
                    <p>Location: {race.Circuit.Location.locality}, {race.Circuit.Location.country}</p>
                    <a href={race.url} target='_blank'>Race Info</a>
                </div>
            ))}
          </div>
        </div>
      )
}

const mapStateToProps = (state) => {
    return {
        raceData: state.races.races
    }
}
const mapDispatchToProps = dispatch => {
    return {
      fetchRaces: () => dispatch(fetchRaces())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(F1Races);


// sample data return
// {
//     MRData: {
//     xmlns: "http://ergast.com/mrd/1.4",
//     series: "f1",
//     url: "http://ergast.com/api/f1/current.json",
//     limit: "30",
//     offset: "0",
//     total: "17",
//     RaceTable: {
//     season: "2020",
//     Races: [
//     {
//     season: "2020",
//     round: "1",
//     url: "https://en.wikipedia.org/wiki/2020_Austrian_Grand_Prix",
//     raceName: "Austrian Grand Prix",
//     Circuit: {
//     circuitId: "red_bull_ring",
//     url: "http://en.wikipedia.org/wiki/Red_Bull_Ring",
//     circuitName: "Red Bull Ring",
//     Location: {
//     lat: "47.2197",
//     long: "14.7647",
//     locality: "Spielburg",
//     country: "Austria"
//     }
//     },
//     date: "2020-07-05",
//     time: "13:10:00Z"
//     },
//     ]
//     }
//     }
//     }