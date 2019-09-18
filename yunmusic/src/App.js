import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Discover from "./views/Discover"; 
import Common from "./views/Common";
import SongSheet from "./views/Discover/SongSheet"
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
					<Route path={"/songsheet/:id"}  component={SongSheet}></Route>
					{/* <Route match='match' path={"/discover"}  component={Discover}></Route> */}
					<Route path={"/login"} component={Login}></Route>
					<Route path={"/cellphone"} component={Cellphone}></Route>	

					<Route path={"/"}  component={Common}></Route>
					
				</Switch>
			</Router>
		)
	}

}
export default App;