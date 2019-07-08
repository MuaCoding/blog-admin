import React, { Component } from "react";
import { Divider, Checkbox } from "antd";
import { func } from "prop-types";

import "../../assets/style/index.css"; // 引入样式

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					title: "ionic",
					checked: true,
				},
				{
					title: "nodejs",
					checked: false,
				},
				{
					title: "java",
					checked: false,
				},
				{
					title: "vue",
					checked: false,
				},
			],
		};
	}

	addData = e => {
		if (e.keyCode == 13) {
			let title = this.refs.title.value;
			let tempList = this.state.list;

			tempList.push({
				title: title,
				checked: false,
			});

			this.setState({
				list: tempList,
			});

			this.refs.title.value = "";
		}
	};

	checkboxChange = key => {
		let tempList = this.state.list;

		tempList[key].checked = !tempList[key].checked;

		this.setState({
			list: tempList,
		});
	};

	removeData = key => {
		let tempList = this.state.list;

		tempList.splice(key,1)

		this.setState({
			list: tempList,
		});


	};

	render() {
		return (
			<div className="wrap">
				<input ref="title" onKeyUp={this.addData}></input>

				<h2>待办事项</h2>

				<hr />
				<ul>
					{this.state.list.map((value, key) => {
						if (!value.checked) {
							return (
								<li key={key}>
									<input
										type="checkbox"
										checked={value.checked}
										onChange={this.checkboxChange.bind(this, key)}
									/>
									{value.title}
									-- <button onClick={this.removeData.bind(this, key)}>删除</button>
								</li>
							);
						}
					})}
				</ul>

				<h2>已完成事项</h2>

				<hr />

				<ul>
					{this.state.list.map((value, key) => {
						if (value.checked) {
							return (
								<li key={key}>
									<input
										type="checkbox"
										checked={value.checked}
										onChange={this.checkboxChange.bind(this, key)}
									/>
									{value.title}
									-- <button onClick={this.removeData.bind(this, key)}>删除</button>
								</li>
							);
						}
					})}
				</ul>
			</div>
		);
	}
}

export default Todo;
