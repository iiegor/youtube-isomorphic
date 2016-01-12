import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import app from 'reducers/app';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  app,
  routing
});

export default rootReducer;
