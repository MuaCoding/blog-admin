import React, { Component } from "react";
import { List } from "antd";
import { Link } from "react-router-dom";

class news extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [{
				id: 1,
				title: '我是新闻11'
			},{
				id: 2,
				title: '我是新闻22'
			},{
				id: 3,
				title: '我是新闻33'
			},{
				id: 4,
				title: '我是新闻44'
			},],
		};
	}
	render() {
		return (
			<div>我是新闻组件

				<ul>
					{
						this.state.list.map((value,key)=>{
							return (<li key={key}>
								<Link to={`/detail/?id=${value.id}`}>{value.title}</Link>
							</li>)
						})
					}
				</ul>
			</div>

		);
	}
}

export default news;
