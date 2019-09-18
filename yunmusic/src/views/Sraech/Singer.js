import React from "react";
import {Button,Layout} from 'antd';
import { Row, Col } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
	Switch
} from "react-router-dom"
import "./search.css"
export default class Search extends React.Component{
    render(){
        return (
            <div>
                <Router>
                    
                    <nav className="box">
                        <NavLink to={"/search"} onClick={()=>(this.props.history.push("/search"))}><i className="iconfont">&#xe633;</i></NavLink>
                        <span>歌手分类</span>
                    </nav> 
                    <Switch>
                        <Route path={"/search"} component={Search}></Route>
                    </Switch>
                </Router>
            </div>
         )
    }
}