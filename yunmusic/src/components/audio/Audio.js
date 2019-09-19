import React from "react";
import "../../aseets/style/Audio/audio.css"
import { Row, Col } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    withRouter
} from "react-router-dom"


export default class Audio extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
           <div style={{width:"100%",position:"fixed",left:0,bottom:0}}>
                <div style={{background:"#fff",height:"1.2rem"}}>
                    <Row>
                    <NavLink to={{
                                    pathname:"/playmusic/",
                                    // state:{
                                    //    data:item
                                    // }
                                }}>  
                    <Col span={4}>
                    <div style={{lineHeight:"1.2rem",textAlign:"center"}}>
                        <div style={{display:"inline-block",height:"1.2rem"}}>
                        <div className="Audio-picUrl"><img src="http://p2.music.126.net/DJfkuXG7P478Cb2ODUgmRg==/109951163608046759.jpg"/></div>

                        </div>
                    </div>
                    </Col>
                    
                    <Col span={14} style={{height:"1.3rem"}}>
                    <div style={{lineHeight:"0.9rem",height:"1.2rem"}}>
                        <div style={{display:"inline-block",height:"1.3rem"}}>
                            <p style={{height:"0.4rem",fontSize:"0.35rem",color:"#000"}}>眼睛里（In Eyes）</p>
                            <p style={{height:"0.3rem",fontSize:"0.3rem",color:"#000"}}>啦啦啦</p>
                        </div>
                    </div>
                    </Col>
                    </NavLink>
                    <Col span={3}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{height:"1.2rem",textAlign:"center",width:"100%"}} ref="AudioPlay"  onClick={()=>{this.AudioPlay()}}>
                        <i style={{display:"none",fontSize:"0.8rem",margin:"0.1rem 0.4rem 0rem",color:"#000"}} className="iconfont">&#xe665;</i>
                        <i style={{display:"block",fontSize:"0.8rem",margin:"0.1rem 0.4rem 0rem",color:"#000"}} className="iconfont">&#xe664;</i>
                        </div>
                    </div>
                    </Col>
                    <Col span={3}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{height:"1.2rem",textAlign:"center",width:"100%"}} ref="AudioSheet">
                        <i style={{display:"none",fontSize:"0.7rem",margin:"0.1rem 0.4rem 0rem",color:"#000"}} className="iconfont">&#xe62e;</i>
                        <i style={{display:"block",fontSize:"0.7rem",margin:"0.1rem 0.4rem 0rem",color:"#000",position:"relative",top:"-0.06rem"}} className="iconfont">&#xe60a;</i>
                        </div>
                    </div>
                    </Col>
                </Row>
                    </div>
           </div>
        )
    }
    AudioPlay(){
        if(this.refs.AudioPlay.children[0].style.display==="none"){
            this.refs.AudioPlay.children[0].style.display="block"
            this.refs.AudioPlay.children[1].style.display="none"
        }else{
            this.refs.AudioPlay.children[0].style.display="none"
            this.refs.AudioPlay.children[1].style.display="block"
        }
    }
}
