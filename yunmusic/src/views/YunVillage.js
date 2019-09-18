import React from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
	Switch
} from "react-router-dom"
import {Button,Layout} from 'antd';
import { Row, Col } from 'antd';
import Plaza from "./YunVallage/Plaza";
import Dynamic from "./YunVallage/Dynamic"
import "./YunVallage/yun.css"
export default class YunVallage extends React.Component{
    render(){
        return (
            <div>
                <nav className="head">
                    <NavLink to={"/yunvillage/plaza"} >广场</NavLink>
                    <NavLink to={"/yunvillage/dynamic"}>动态</NavLink>
                </nav>
                <Switch>
                    <Route path={"/yunvillage/plaza"} component={Plaza}></Route>
                    <Route path={"/yunvillage/dynamic"} component={Dynamic}></Route>
                </Switch>
                
            </div>
        )
    }
}