import React from "react";
import {Button,Layout} from 'antd';
import { Row, Col } from 'antd';
import axios from "axios"
import Discover from "./Discover"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
	Switch
} from "react-router-dom"
import "./Sraech/search.css"
import Singer from "./Sraech/Singer"

export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
            Keyword:"",
            List:[],
            val:""
            
        }
    }
    async change(ea){
    
           this.setState({  
                    val:this.refs.inp.value
             })
        if(this.refs.inp.value!==""){
            const {data} =await axios.get("http://49.232.53.60:8080/search?keywords="+this.refs.inp.value);
           this.setState({  
                    List:data.result.songs.splice(0,9)||[]
             })
        }
        
     }
    render(){
        return (
            <div>
                <Router>
                    <Row type="flex" justify="space-between">
                        <nav className="head">
                            <Col span={2}><NavLink to={"/discover"} onClick={()=>(this.props.history.push("/"))}><i className="iconfont">&#xe633;</i></NavLink></Col>
                            <Col span={18}><input type="text" onChange={this.change.bind(this)} ref="inp"   placeholder={this.state.Keyword} /></Col>
                            
                            <ul className="list" style={{display:this.state.val===""?"none":"block"}}>
                               <li className="top" onClick={()=>(this.props.history.push("/detail"))}>搜索"{this.state.val}"</li>
                                {(this.state.List).map((item,i)=>(
                                    (  
                                        <li className="strip" onClick={()=>(this.props.history.push("/detail"))}>
                                        <i className="iconfont">&#xe62c;</i>
                                        {item.name}</li>
                                    )
                                ))}
                            </ul>
                            <Col span={2}><NavLink to={"/singer"} ><i className="iconfont" onClick={()=>(this.props.history.push("/singer"))}>&#xe653;</i></NavLink></Col>

                        </nav>
                    </Row>
                    <Switch>
                        <Route path={"/discover"} component={Discover}></Route>
                        
                    </Switch>
                </Router>
                
            </div>
        )
    }
    async getDefault(){
        const {data} =await axios.get(`http://49.232.53.60:8080/search/default`);
        this.setState({
            Keyword:data.data.showKeyword
        })
        console.log(data)
        
    }
   
    componentDidMount(){
        
        this.getDefault();
    }
}