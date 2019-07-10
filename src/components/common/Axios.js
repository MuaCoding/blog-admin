import React, {Component} from 'react';
import axios from 'axios';
import { func } from 'prop-types';
import { timingSafeEqual } from 'crypto';

class Axios extends Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: '我是一个msg'
		};
	}

	// 组件将要挂载点时候触发的生命周期函数
	componentWillMount(){
		console.log('02组件将要挂载')
	}
	// 组件挂载完成的时候触发的生命周期
	componentDidMount(){

		// dom的操作，数据请求操作
		console.log('组件挂载完成')
	}

	// 是否要更新数据，如果返回true才会执行更新数据的操作
	shouldComponentUpdate(nextProps,nextState){
		console.log('01是否要更新数据')
		console.log(nextProps)
		console.log(nextState)
		return true
	}

	// 将要更新数据的时候触发
	componentWillUpdate(){
		console.log('02组件将要更新')
	}

	// 组件更新完成
	componentDidUpdate(){
		console.log('04组件将要更新')
	}


	setMsg= ()=>{
		this.setState({
			msg: '我是改变后的msg的数据'
		})
	}

	getData = ()=>{

		// 通过axios获取服务器数据

		var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';

		axios.get(api).then((response)=>{
			console.log(response.data.result)

			this.setState({
				list: response.data.result
			})

		}).catch(function(error) {

		})

	}

	render() {
		return (
			<div>
				<h2>生命周期函数演示  ----- {this.state.msg} ---- {this.props.title}</h2>
				<button onClick={this.setMsg}>更新</button>

			</div>
		);
	}
}

export default Axios;
