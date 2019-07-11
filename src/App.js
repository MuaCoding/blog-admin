import React, { Component } from "react";
// import logo from './logo.svg';
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';
// import {Input, Button, List} from 'antd'; // 1. 引入 antd 的列表
import "antd/dist/antd.css"; // 2. 引入 antd 的样式
import "../src/assets/style/index.css"; // 引入样式
import "../src/assets/style/reset.css"; // 引入重置样式

import store from "./store"; // 7. 引入 store，可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写

import Header from "./common/header";

import Todo from "../src/components/todo/Todo";

import Axios from "../src/components/common/Axios";


import Home from './components/demo/Home'
import News from './components/demo/News'
import Product from './components/demo/Product'
import Detail from './components/demo/Detail'

class App extends Component {
	// 8.在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
	constructor(props) {
		super(props);

		// 9. 尝试获取store.getState()
		this.state = store.getState();

		this.state = {
			title: "我是app组件的title",
			flag: true,
		};
	}


	render() {
		return (
			// <Provider store={store} className="App">

			// 	{
			// 		this.state.flag ? <Axios title={this.state.title}/> :''
			// 	}
			// </Provider>

			<Router>
				<div>
					<Route exact path="/" component={Home}></Route>
					<Route path="/news" component={News}></Route>
					<Route path="/product/:id" component={Product}></Route>
					<Route path="/detail" component={Detail}></Route>
				</div>
			</Router>
		);
	}

}

export default App;
