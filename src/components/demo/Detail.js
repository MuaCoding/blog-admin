import React, { Component } from "react";
// url 模块来解析url地址，
import url from 'url'
const axios = require("axios");

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			domain: "http://a.itying.com/",
		};
	}


	queryData(id) {
		var api = this.state.domain + "api/productcontent?id=" + id;

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

	componentDidMount(){

		let id = this.props.match.params.id
		console.log(this.props)

		this.queryData(id)
	}


	render() {
		return (
			<div className="product">
				<div className="image">
					{/* <image /> */}
				</div>
			</div>
		);
	}
}

export default Detail;
