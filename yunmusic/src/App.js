import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Singer from "./views/Sraech/Singer"
import Common from "./views/Common";
import Login from "./views/Login";
import Cellphone from "./views/Cellphone";
import Search from "./views/Search"
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import Detail from "./views/Sraech/detail";
class App extends Component{
	
	render(){
		return (
			<Router>
				<Switch>
					<Route path={"/detail"} component={Detail}></Route>
					<Route path={"/login"} component={Login}></Route>
					<Route path={"/cellphone"} component={Cellphone}></Route>
					<Route path={"/search"} component={Search}></Route>	
					<Route path={"/singer"} component={Singer}></Route>
					<Route path={"/"} exact component={Common}></Route>
				</Switch>
			</Router>
		)
	}

}
export default App;