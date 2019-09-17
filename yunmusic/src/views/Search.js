import React from "react";
import "./search/index.css"
import { Layout, Menu, Breadcrumb, Icon ,Input} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
import Singer from "./search/Singer"
export default class Home extends React.Component{
    render(){
        return (
            <div className="search">
                <i className="iconfont" onClick={()=>{
                    this.props.history.push("/search")
                }}>&#xe633;</i>
                <input type="text" value={""} />
                <Router>
                    <NavLink to={"/singer"}><i className="iconfont">&#xe629;</i></NavLink>
                    <Route path={"/singer"} component={Singer}></Route>
                </Router>
                
            </div>
        )
    }
}
