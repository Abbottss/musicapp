import React from 'react';
import logo from './logo.svg';
import './App.css';
import My from "./views/My";
import Discover from "./views/Discover";
import YunVillage from "./views/YunVillage";
import Video from "./views/Video";
import Search from "./views/Search";
import DrawerLeft from "./components/Drawer"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom"
class App extends React.Component{
    render(){
        return (
            <div >
                <DrawerLeft></DrawerLeft>
                <Router>
                    <nav>
                        <NavLink to={"/my"} >我的</NavLink>
                        <NavLink to={"/discover"} >发现</NavLink>
                        <NavLink to={"/yunvillage"} >云村</NavLink>
                        <NavLink to={"/video"}>视频</NavLink>
                        <NavLink to={"/search"}>搜索</NavLink>
                    </nav>
                    <Switch>
                        <Route path={"/my"} component={My}></Route>
                        <Route path={"/discover"} component={Discover}></Route>
                        <Route path={"/yunvillage"} component={YunVillage}></Route>
                        <Route path={"/video"} component={Video}></Route>
                        <Route path={"/search"} component={Search}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
  // return (
  //   <div className="App">

  //   </div>
  // );

}

export default App;
