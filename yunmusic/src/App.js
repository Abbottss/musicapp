import React from 'react';
import logo from './logo.svg';
import './App.css';
import My from "./views/My";
import Discover from "./views/Discover";
import YunVillage from "./views/YunVillage";
import Video from "./views/Video";
import Search from "./views/Search";


import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <Router>
            <nav>
                <NavLink to={"/my"} >我的</NavLink>
                <NavLink to={"/discover"} >发现</NavLink>
                <NavLink to={"/yunvillage"} >云村</NavLink>
                <NavLink to={"/video"}>视频</NavLink>
                <NavLink to={"/search"}>搜索</NavLink>
            </nav>
            <Route path={"/my"} component={My}></Route>
            <Route path={"/discover"} component={Discover}></Route>
            <Route path={"/yunvillage"} component={YunVillage}></Route>
            <Route path={"/video"} component={Video}></Route>
            <Route path={"/search"} component={Search}></Route>
        </Router>
    </div>
  );
}

export default App;
