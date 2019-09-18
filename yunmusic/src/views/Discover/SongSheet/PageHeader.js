import React from "react";
import { Row, Col } from 'antd';

import "../../../aseets/style/SongSheet/antPageHeader.css";
export default class Page_Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:"",
            SongSheetList:[]
        }
    }
    render(){
        let {data} = this.props;
        return (
            <div>
                <Row>
                <Col span={4}>
                <div style={{lineHeight:"1.7rem"}}>
                    <div style={{display:"inline-block",height:"1.7rem"}}>
                        <i style={{fontSize:"0.5rem",margin:"0.1rem 0.2rem 0",display:"block"}} className="iconfont">&#xe633;</i>

                    </div>
                </div>
                </Col>
                <Col span={14}>
                <div style={{lineHeight:"1.7rem"}}>
                    <div style={{display:"inline-block",height:"1.7rem"}}>
                        <p style={{height:"0.5rem",fontSize:"0.5rem"}}>歌单</p>
                        <p style={{fontSize:"0.3rem"}}></p>
                    </div>
                </div>
                </Col>
                <Col span={3}>
                <div style={{lineHeight:"1.7rem"}}>
                    <div style={{display:"inline-block",height:"1.7rem",textAlign:"center",width:"100%"}}>
                        <i style={{fontSize:"0.8rem"}} className="iconfont">&#xe62c;</i>
                    </div>
                </div>
                </Col>
                <Col span={3}>
                <div style={{lineHeight:"1.7rem"}}>
                    <div style={{display:"inline-block",height:"1.7rem",textAlign:"center",width:"100%"}}>
                        <i style={{fontSize:"0.8rem"}} className="iconfont">&#xe640;</i>
                    </div>
                </div>
                </Col>
                </Row>
            </div>
            
        )
    }
    async shouldComponentUpdate(nextprops){
        console.log(nextprops )
       
           
      }
}