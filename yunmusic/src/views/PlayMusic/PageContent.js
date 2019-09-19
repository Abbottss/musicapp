import React from "react";
import { Row, Col } from 'antd';
import "../../../aseets/style/SongSheet/antPageHeader.css";
export default class PageContent extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return (
            <div>
    
                <Row>
                    <Col span={2}></Col>
                    <Col span={8}>
                    <div className="PageContent-num">
                        <img style={{marginBottom:"0.15rem"}} src={this.props.history.location.state.data.picUrl} style={{width:'100%'}}/>
                        <div>
                            <i className="iconfont">&#xe647;</i>{this.props.history.location.state.data.playCount.toString().length>4?parseInt((this.props.history.location.state.data.playCount)/10000)+"万":this.props.history.location.state.data.playCount}
                        </div>
                    </div>
                    </Col>
                    <Col span={12} className="PageContent-title">
                        <p className="PageContent-name">{this.props.history.location.state.data.name}</p>
                        <p className="PageContent-nickname">
                            <div className="PageContent-avatarUrl"><img src="http://p1.music.126.net/M-ZX4rPWIyguJ_PnekJVPw==/109951163271184431.jpg"/></div>
                            <span></span>
                        </p>
                        <p className="PageContent-description">时间已经迈入了九月，伴随着一场大雨，夏日炎热早已散去，秋季已经真正来临\n落叶 枫红 清爽 干净 舒适 收获 湛蓝的天空 清晨的海……</p>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row type="flex" justify="space-around" className="PageContent-icon">
                    <Col span={4}><i style={{fontSize:"0.7rem",paddingBottom:"0.2rem"}} className="iconfont">&#xe625;</i><br/><span style={{display:"block",paddingTop:"0.01rem"}}>58</span></Col>
                    <Col span={4}><i style={{fontSize:"0.6rem",paddingBottom:"0.2rem"}} className="iconfont">&#xe65b;</i><br/><span style={{display:"block",paddingTop:"0.08rem"}}>50</span></Col>
                    <Col span={4}><i style={{fontSize:"0.6rem",paddingBottom:"0.2rem"}} className="iconfont">&#xe65a;</i><br/><span style={{display:"block",paddingTop:"0.08rem"}}>下载</span></Col>
                    <Col span={4}><i style={{fontSize:"0.6rem",paddingBottom:"0.2rem"}} className="iconfont">&#xe64c;</i><br/><span style={{display:"block",paddingTop:"0.08rem"}}>多选</span></Col>
                </Row>
            </div>
    )
    }

    componentDidMount() {
        this.setState({
            data:this.props
         })   
        console.log(777,this.props)
        console.log(222,this.state)
    }
    
}