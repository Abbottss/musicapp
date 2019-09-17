import React from "react";
import { Row, Col } from 'antd';
import "../../aseets/style/Discover/menu.css";
export default class Menu extends React.Component{
    render(){
        return (
            <div style={{textAlign:"center",padding:"23px 0px 51px"}}>
                 <Row type="flex" justify="space-around">
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"87px",top:"42px"}} className="iconfont">&#xe76d;</i>
                        </div>
                        <span style={{fontSize:"38px",display:"block",paddingTop:"12px",color:"#fff"}}>每日推荐</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"165px",top:"0.08rem",left:"0.01rem"}} className="iconfont">&#xe60f;</i>
                        </div>
                        <span style={{fontSize:"38px",display:"block",paddingTop:"12px",color:"#fff"}}>歌单</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"85px",top:"40px"}} className="iconfont">&#xe618;</i>
                        </div>
                        <span style={{fontSize:"38px",display:"block",paddingTop:"12px",color:"#fff"}}>排行榜</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"111px",top:"32px",left:"0.015rem"}} className="iconfont">&#xe66b;</i>
                        </div>
                        <span style={{fontSize:"38px",display:"block",paddingTop:"12px",color:"#fff"}}>电台</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"135px",left:"auto",top:"25px"}} className="iconfont">&#xe6e3;</i>
                        </div>
                        <span style={{fontSize:"38px",display:"block",paddingTop:"12px",color:"#fff"}}>直播</span>
                    </Col>
                </Row>
            </div>
        )
    }
}