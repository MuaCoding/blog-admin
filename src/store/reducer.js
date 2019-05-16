import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
import { combineReducers } from 'redux';
import headerReducer from '../components/common/header/store/reducer';
//1.定义一个数据defaultState
// const defaultState = {
//   inputBlur: true,
//   inputValue: '',
//   list: []
// }

//2.将数据defaultState最终以state形式导出去
// export default (state = defaultState, action) => {
//
//   // 5.
//   console.log(state)
//   console.log(action)
//
//   //6.在reducer.js 中获取数据，并return回去处理jieg
//   if (action.type === CHANGE_INPUT_VALUE) {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.inputValue = action.value;
//     return newState;
//   }
//
//
//   if (action.type === ADD_TODO_ITEM) {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.list.push(newState.inputValue);
//     newState.inputValue = '';
//     return newState;
//   }
//
//   // 在 reducer.js 中获取数据，并 return 回去处理结果
//   // 3. 使用 actionTypes
//   if (action.type === DELETE_TODO_ITEM) {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.list.splice(action.index, 1);
//     return newState;
//   }
//
//   // 10. 接受 list 传递过来的数据，并进行处理与返回
//   if(action.type === INIT_LIST_ACTION) {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.list = action.data;
//     return newState;
//   }
//
//   if (action.type === 'search_focus_or_blur') {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.inputBlur = !newState.inputBlur;
//     return newState;
//   }
//
//   return state
// }


const reducer = combineReducers({
  header: headerReducer
})

export default reducer
