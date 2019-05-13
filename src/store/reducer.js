//1.定义一个数据defaultState
const defaultState = {
  inputValue: '',
  list: [
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第五条 TodoList',
  ]
}

//2.将数据defaultState最终以state形式导出去
export default (state = defaultState,action) =>{

  // 5.
  console.log(state)
  console.log(action)

  //6.在reducer.js 中获取数据，并return回去处理jieg
  if (action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state
}
