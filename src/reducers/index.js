import { INCREMENT, DECREMENT, SET_DIFF } from "../actions";
import { combineReducers } from "redux";

const conuterInitialState = {
  value: 0,
  diff: 1,
};

const counter = (state = conuterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff,
      });

    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff,
      });

    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.data.number,
      });
    default:
      return state;
  }
};

const counterApp = combineReducers({
  counter,
});

export default counterApp;
