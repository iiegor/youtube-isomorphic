import { TOGGLE_SIDEBAR } from 'constants/actionTypes';

export default function app(state = {
  sidebarVisible: false
}, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarVisible: !state.sidebarVisible
      });
    default:
      return state;
  }
}