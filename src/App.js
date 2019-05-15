import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Input, Button, List} from 'antd'; // 1. 引入 antd 的列表
import 'antd/dist/antd.css'; // 2. 引入 antd 的样式

import store from './store'; // 7. 引入 store，可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写
import {getInputChangeAction, getAddItemAction, getItemDeleteAction, getList} from './store/actionCreators';
import ListGroup from './ListGroup';

import Header from './components/common/header';


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

      <div className="App">
        <Header />
      </div>
    );
  };

  // 2. 在 componentDidMount() 中进行 axios 接口调用
  componentDidMount() {

    // 5. 在 componentDidMount 中调用 getTodoList。如果我们没使用 redux-thunk，我们只能使用对象，但是现在我们可以使用函数了。
    const action = getList();
    // 6. 当我们 dispatch 了 action 的时候，我们就调用了步骤 1 的 getList()，从而获取了数据
    store.dispatch(action);
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
