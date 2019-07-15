import Home from "../components/demo/Home";
import User from "../components/demo/User";
import Information from "../components/demo/user/Information";
import Main from "../components/demo/user/Main";

let routes = [
	{
		path: "/",
		component: Home,
		exact: true,
	},
	{
		path: "/user",
		component: User,
		routes: [
			{
				path: "/user/",
				component: Main,
			},
			{
				path: "/user/information",
				component: Information,
			},
		],
	},
];

export default routes;
