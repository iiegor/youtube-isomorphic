import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  routing
});

export default rootReducer;
