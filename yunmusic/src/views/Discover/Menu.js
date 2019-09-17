import React from "react";
import { Row, Col } from 'antd';
import "../../aseets/style/Discover/menu.css";
export default class Menu extends React.Component{
    render(){
        return (
            <div style={{textAlign:"center",padding:"10px 0px 23px"}}>
                 <Row type="flex" justify="space-around">
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"50px",top:"25px"}} className="iconfont">&#xe76d;</i>
                        </div>
                        <span style={{fontSize:"21px",display:"block",paddingTop:"12px",color:"#fff"}}>每日推荐</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"100px",top:"0.08rem",left:"0.01rem"}} className="iconfont">&#xe60f;</i>
                        </div>
                        <span style={{fontSize:"21px",display:"block",paddingTop:"12px",color:"#fff"}}>歌单</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"53px",top:"23px"}} className="iconfont">&#xe618;</i>
                        </div>
                        <span style={{fontSize:"21px",display:"block",paddingTop:"12px",color:"#fff"}}>排行榜</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"62px",top:"22px",left:"0.02rem"}} className="iconfont">&#xe66b;</i>
                        </div>
                        <span style={{fontSize:"21px",display:"block",paddingTop:"12px",color:"#fff"}}>电台</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"74px",left:"auto",top:"19px"}} className="iconfont">&#xe6e3;</i>
                        </div>
                        <span style={{fontSize:"21px",display:"block",paddingTop:"12px",color:"#fff"}}>直播</span>
                    </Col>
                </Row>
            </div>
        )
    }
}