import React, {Component} from 'react';
// import logo from './logo.svg';
import {Provider} from 'react-redux';
// import './App.css';
// import {Input, Button, List} from 'antd'; // 1. 引入 antd 的列表
import 'antd/dist/antd.css'; // 2. 引入 antd 的样式

import store from './store'; // 7. 引入 store，可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写

import Header from './common/header';

import Todo from '../src/components/todo/Todo';


class App extends Component {

  // 8.在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
  constructor(props) {
    super(props);

    // 9. 尝试获取store.getState()
    this.state = store.getState();

  }


  render() {
    return (

      <Provider store={store} className="App">
				{/* <Header/> */}
				<Todo />
      </Provider>
    );
  };

  // 2. 在 componentDidMount() 中进行 axios 接口调用
  componentDidMount() {

  }

}


export default App;
