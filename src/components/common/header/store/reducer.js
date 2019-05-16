// 1.将reducer.js转移到header/store/reducer.js中
const defaultState = {
  inputBlur: true
};

export default (state = defaultState, action) => {
  if (action.type === 'search_focus_or_blur') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputBlur = !newState.inputBlur
    return newState;
  }

  return state
}
