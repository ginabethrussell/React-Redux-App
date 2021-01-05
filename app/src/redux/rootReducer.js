import { combineReducers } from 'redux';

import standingsReducer from './standings/standingsReducer';
import racesReducer from './races/racesReducer';

export const rootReducer = combineReducers({
    standings: standingsReducer,
    races: racesReducer
})

