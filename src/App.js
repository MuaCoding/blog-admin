import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Input, Button, List} from 'antd'; // 1. 引入 antd 的列表
import 'antd/dist/antd.css'; // 2. 引入 antd 的样式

import store from './store'; // 7. 引入 store，可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写


class App extends Component {

  // 8.在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
  constructor(props) {
    super(props);

    // 9. 尝试获取store.getState()
    console.log(store.getState())
    this.state = store.getState();

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
      <div className="todo">
        <div className="todo-title">
          <h1>todolist</h1>
        </div>
        <div className="todo-action">
          <Input placeholder='todo'
                 className="todo-input"
                 value={this.state.inputValue}
                 onChange={this.handleInputChange}
                 onKeyUp={this.handleInputKeyUp}
          />
          <Button className="todo-submit" type="primary" onClick={this.handleAddItem}>提交</Button>
        </div>

        <div className="todo-list">
          <List size="large" bordered dataSource={this.state.list}
                renderItem={(item, index) => (<List.Item>{index + 1} - {item}</List.Item>)}/>
        </div>
      </div>
    );
  };

  // 3.编写handleInputChange
  handleInputChange(e) {
    //  4.通过action，将数据传递给store
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }

    store.dispatch(action)
  }

  // 8.在handleStoreChange 中处理数据
  handleStoreChange() {
    this.setState(store.getState());
  }

//  3.编写handleAddItem 方法
  handleAddItem() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

//  8.为input 的keyup 方法handleInputKeyUp绑定handleAddItem


}


export default App;
