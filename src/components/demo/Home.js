import React, { Component } from "react";
import { Link } from "react-router-dom";
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
			<div className="home">
				<div className="list">
					{this.state.list.map((value, key) => {
						return (
							<div className="item" key={key}>
								<h3 className="item-cate">{value.title}</h3>
								<ul className="item-list">
									{value.list.map((v, k) => {
										return (
											<li key={k}>
												<Link to={`/detail/${v._id}`}>
													<div className="inner">
														<img src={`${this.state.domain}${v.img_url}`} />
														<p className="title">{v.title}</p>
														<p className="price">￥{v.price}</p>
													</div>
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default home;
