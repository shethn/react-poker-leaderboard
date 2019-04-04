import playerReducer from './playerReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers( {
    players: playerReducer
} );

export default rootReducer;