import React from "react";
import { Row, Col } from 'antd';

import "../../../aseets/style/SongSheet/antPageHeader.css";
export default class Page_Header extends React.Component{
    constructor(props){
        super(props);

    }
    render(){

        return (
            <div>
                <div style={{background:"#fff",borderRadius:"0.6rem 0.6rem 0 0",height:"1rem"}}>
                <Row>
                    <Col span={4}>
                    <div style={{lineHeight:"0.8rem"}}>
                        <div style={{display:"inline-block",height:"1rem"}}>
                            <i style={{fontSize:"0.6rem",margin:"0.1rem 0.4rem 0rem",display:"block",color:"#000"}} className="iconfont">&#xe665;</i>

                        </div>
                    </div>
                    </Col>
                    <Col span={12} style={{height:"1.3rem"}}>
                    <div style={{lineHeight:"1rem",height:"1rem"}}>
                        <div style={{display:"inline-block",height:"1.3rem"}}>
                            <p style={{height:"0.5rem",fontSize:"0.4rem",color:"#000"}}>播放全部(共45首)</p>
                        </div>
                    </div>
                    </Col>
                    <Col span={8}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{display:"inline-block",height:"1rem",textAlign:"center",width:"100%"}}>
                            <p style={{display:"initial",padding:"0.15rem 0.2rem",border:"0.02rem solid red",background:"rgb(239,84,60)",borderRadius:"1rem"}}>+ 收藏（6240）</p>
                        </div>
                    </div>
                    </Col>
                </Row>
                </div>
                <div >
                {/* <audio preload="auto" onClick={(e)=>(console.log(e.target))} style={{zIndex:"10"}}>
                    <source src="http://m7.music.126.net/20190919144039/45357638f55cf0eb157feaabe99828ab/ymusic/d541/514b/29ec/a8e9d0d1abc3e4b87b3d4ff88ae9b087.mp3" type="audio/mpeg"/>>

                </audio> */}
                    <div style={{background:"#fff",height:"1.2rem"}}>
                    <Row>
                    <Col span={4}>
                    <div style={{lineHeight:"1.2rem",textAlign:"center"}}>
                        <div style={{display:"inline-block",height:"1.2rem"}}>
                            <span style={{height:"0.5rem",fontSize:"0.4rem",color:"#000",}}>1</span>

                        </div>
                    </div>
                    </Col>
                    <Col span={14} style={{height:"1.3rem"}}>
                    <div style={{lineHeight:"1.2rem",height:"1.2rem"}}>
                        <div style={{display:"inline-block",height:"1.3rem"}}>
                            <p style={{height:"0.5rem",fontSize:"0.4rem",color:"#000"}}>眼睛里（In Eyes）</p>
                        </div>
                    </div>
                    </Col>
                    <Col span={3}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{height:"1.2rem",textAlign:"center",width:"100%"}}>
                        <i style={{fontSize:"0.6rem",margin:"0.1rem 0.4rem 0rem",display:"block",color:"#000"}} className="iconfont">&#xe654;</i>
                        </div>
                    </div>
                    </Col>
                    <Col span={3}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{height:"1.2rem",textAlign:"center",width:"100%"}}>
                        <i style={{fontSize:"0.6rem",margin:"0.1rem 0.4rem 0rem",display:"block",color:"#000"}} className="iconfont">&#xe640;</i>
                        </div>
                    </div>
                    </Col>
                </Row>
                    </div>
                </div>
            </div>
    )
    }
}