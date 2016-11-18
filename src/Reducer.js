import { SUB } from './Actions.js';

const initialState = {
  isActive: false
}

const notificationApp = (state, action) => {
  switch (action.type) {
    case SUB:
      return Object.assign({}, state, {
        isActive: !state.isActive
      });
    default:
      return state;
  }
}
