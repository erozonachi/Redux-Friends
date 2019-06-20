import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import friendsReducer from '../reducers';

const combineReducer = combineReducers({appState: friendsReducer});

export const store = createStore(
  combineReducer,
  applyMiddleware(thunk, logger)
);
