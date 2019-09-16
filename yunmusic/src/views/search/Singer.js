import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"
import "./index.css"
export default class Singer extends React.Component{
    render(){
        return(
            <div>
                <i className="iconfont" onClick={()=>{
                    this.props.history.push("/search")
                }}>&#xe633;</i>
                <span>歌手分类</span>
                 
            </div>
            
        )
    }
}