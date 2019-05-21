
import * as actionTypes from './actionTypes'

// 1.将reducer.js转移到header/store/reducer.js中
const defaultState = {
  inputBlur: true
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS_OR_BLUR) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputBlur = !newState.inputBlur
    return newState;
  }

  return state
}
