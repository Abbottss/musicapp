import React from "react";
import { Row, Col } from 'antd';
import "../../aseets/style/Discover/menu.css";
export default class Menu extends React.Component{
    render(){
        return (
            <div style={{textAlign:"center",padding:"10px 0"}}>
                 <Row type="flex" justify="space-around">
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"25px",top:"0.655rem"}} className="iconfont">&#xe76d;</i>
                        </div>
                        <span style={{fontSize:"10px",display:"block",paddingTop:"7px"}}>每日推荐</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"47px",top:"0.08rem"}} className="iconfont">&#xe60f;</i>
                        </div>
                        <span style={{fontSize:"10px",display:"block",paddingTop:"7px"}}>歌单</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"22px",top:"0.8rem"}} className="iconfont">&#xe618;</i>
                        </div>
                        <span style={{fontSize:"10px",display:"block",paddingTop:"7px"}}>排行榜</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"28px",top:"0.6rem",left:"0.1rem"}} className="iconfont">&#xe66b;</i>
                        </div>
                        <span style={{fontSize:"10px",display:"block",paddingTop:"7px"}}>电台</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"31px",left:"auto"}} className="iconfont">&#xe6e3;</i>
                        </div>
                        <span style={{fontSize:"10px",display:"block",paddingTop:"7px"}}>直播</span>
                    </Col>
                </Row>
            </div>
        )
    }
}