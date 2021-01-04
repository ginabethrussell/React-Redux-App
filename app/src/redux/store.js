import {createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import standingsReducer from './standings/standingsReducer';
import racesReducer from './races/racesReducer';

const rootReducer = combineReducers({
    standings: standingsReducer,
    races: racesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
