import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Common from "./views/Common";
import Login from "./views/Login";
import Cellphone from "./views/Cellphone";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
class App extends Component{
	render(){
		return (
			<Router>
				<Switch>
					<Route path={"/login"} component={Login}></Route>
					<Route path={"/cellphone"} component={Cellphone}></Route>	
					<Route path={"/"} component={Common}></Route>
				</Switch>
			</Router>
		)
	}
}
export default App;