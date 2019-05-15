// 引入 actionTypes
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
// 1. 把 axios 从 TodoList.js 中剪切到 actionCreators.js 中
import axios from 'axios';
//2.导出相应的action

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getItemDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

// 4. 编写导出的 initListAction，所以需要先在 actionTypes 中引入 INIT_LIST_ACTION
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})


//2.把app.js文件中componentDidMount()的axios.get()挪到actionCreator.js中
//3.在没有用redux-thunk之前，我们仅可以在actionCreators.js中使用对象，现在我们也可以使用函数了
export const getList = () => {
//  7.当我们使用getList的时候，我们也能传递store的dispatch ,从而在下面代码中使用
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist').then((res) => {
      // 8. 直接使用 actionCreators.js 中的 initListAction方法，并 dispatch 该 action
      const action = initListAction(res.data.todolist);
      dispatch(action);
    })
  }
}
