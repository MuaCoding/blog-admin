import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class User extends Component {
	constructor(props) {
		super(props);
		this.state = {};

	}

	componentDidMount(){
		console.log(this.props)
	}
	render() {
		return (
			<div className="user">
				<div className="content">
					<div className="left">
						<Link to="/user/"> 个人中心</Link>

						<Link to="/user/information"> 用户信息</Link>
					</div>
					<div className="fight">

						{
							this.props.routes.map((route,key) =>{
								return <Route exact key={key} path={route.path} component={route.component} />
							})
						}

					</div>
				</div>
			</div>
		);
	}
}

export default User;
