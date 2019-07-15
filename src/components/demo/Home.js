import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "antd";
const axios = require("axios");

class home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			domain: "http://a.itying.com/",
		};
	}

	queryData = () => {
		var api = this.state.domain + "api/productlist";

		axios
			.get(api)
			.then(response => {
				console.log(response.data.result);

				this.setState({
					list: response.data.result,
				});
			})
			.catch(function(error) {});
	};

	componentDidMount() {
		this.queryData();
	}

	render() {
		return (
			<div>
				我是首页
				<Button type="primary">Primary</Button>

				<Icon type="setting" theme="filled" />
			</div>
		);
	}
}

export default home;
