import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./header.css";
// 2. 以 actionCreators 的形式将所有 action 引入进来
// import * as actionCreators from './store/actionCreators';

import { actionCreators } from "./store";
import logo from "../../assets/images/logo.png";

const Header = props => {

	return (
		<header>
			<div className="header-left">
				<a href="/">
					<img src={logo} className="header-left-img" alt="" />
				</a>
			</div>
			<div className="header-center">
				<div className="header-center-left">
					<div className="nav-item header-center-left-home">
						<i className="icon icon-home"></i>
						<span>首页</span>
					</div>
					<div className="nav-item header-center-left-download">
						<i className="icon icon-download"></i>
						<span>下载App</span>
					</div>
					<div className="nav-item header-center-left-search">
						<CSSTransition in={props.inputBlur} timeout={200} classNames="slide">
							<input
								type="text"
								className={props.inputBlur ? "input-nor-active" : "input-active"}
								placeholder="搜索"
								onFocus={props.searchFocusOrBlur}
								onBlur={props.searchFocusOrBlur}
							/>
						</CSSTransition>
						<i
							className={props.inputBlur ? "icon icon-search" : "icon icon-search icon-active"}
						></i>
					</div>
				</div>
				<div className="header-center-right">
					<div className="nav-item header-right-setting">
						<span>Aa</span>
					</div>
					<div className="nav-item header-right-login">
						<span>登录</span>
					</div>
				</div>
			</div>
			<div className="header-right nav-item">
				<span className="header-right-register">注册</span>
				<span className="header-right-write nav-item">
					<i className="icon icon-write"></i>
					<span>写文章</span>
				</span>
			</div>
		</header>
	);
};

const mapStateToProps = state => {
	return {
		inputBlur: state.header.inputBlur,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		searchFocusOrBlur() {
			dispatch(actionCreators.searchFocusOrBlur());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
