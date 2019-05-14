import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Input, Button, List} from 'antd'; // 1. 引入 antd 的列表
import 'antd/dist/antd.css'; // 2. 引入 antd 的样式

import store from './store'; // 7. 引入 store，可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写
import {getInputChangeAction, getAddItemAction, getItemDeleteAction, initListAction} from './store/actionCreators';
import ListGroup from './ListGroup';
import axios from 'axios'; // 1. 引入 axios


class App extends Component {

  // 8.在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
  constructor(props) {
    super(props);

    // 9. 尝试获取store.getState()
    this.state = store.getState();
    console.log(this.state)

    // 2.定义handleInputChange
    this.handleInputChange = this.handleInputChange.bind(this);

    // 7.绑定方法handleStoreChange 处理redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange)


    //  2.处理handleAddItem 方法
    this.handleAddItem = this.handleAddItem.bind(this);

    // 7.处理handleInputKeyUp方法
    this.handleInputKeyUp = this.handleInputKeyUp(this)

  }


  render() {
    return (
      <ListGroup
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleInputKeyUp={this.handleInputKeyUp}
        handleAddItem={this.handleAddItem}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  };

  // 2. 在 componentDidMount() 中进行 axios 接口调用
  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist').then((res) => {
      console.log(res.data.todolist);
      // 3. 将接口数据 dispatch 到 action 中，所以需要先前往 actionCreators.js 中创建 action
      // 8. 创建 action 并 dispatch 到 reducer.js 中
      const action = initListAction(res.data.todolist);
      store.dispatch(action);
    })
  }

  // 3.编写handleInputChange
  handleInputChange(e) {
    //  4.通过action，将数据传递给store
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  // 8.在handleStoreChange 中处理数据
  handleStoreChange() {
    this.setState(store.getState());
  }

//  3.编写handleAddItem 方法
  // 编写 handleAddItem 方法
  handleAddItem() {
    // 通过 dispatch(action)，将数据传递给 store
    // 3. 使用 actionTypes
    const action = getAddItemAction()
    store.dispatch(action);
  }

  // 为 Input 的 keyUp 方法 handleInputKeyUp 绑定 handleAddItem
  handleInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleAddItem();
    }
  }

  // 编写 handleDeleteItem 方法
  handleDeleteItem(index) {
    // 通过 dispatch(action)，将数据传递给 store
    // 3. 使用 actionTypes
    const action = getItemDeleteAction(index)
    store.dispatch(action);
  }

}


export default App;
