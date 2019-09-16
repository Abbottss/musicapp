import React from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom"
import Dynamic from "./yunVillage/Dynamic"
import Plaza from "./yunVillage/Plaza"
import "./yunVillage/yunVillage.css"
export default class Home extends React.Component{
    render(){
        return (
            <div className="box">
                <Router>
                    <nav>
                        <NavLink className={"left"} activeStyle={{color:"red"}} to={"/plaza"}>广场</NavLink>
                        <NavLink className={"right"} activeStyle={{color:"red"}} to={"/dynamic"}>动态</NavLink>
                    </nav>
                    <Switch>
                        <Route path={"/plaza"} component={Plaza}></Route>
                        <Route path={"/dynamic"} component={Dynamic}></Route>
                    </Switch>
                   
                </Router>
                
            </div>
        )
    }
}