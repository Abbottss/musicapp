import React from "react";
import { Row, Col } from 'antd';

export default class Page_Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        // let {data} = this.props;
        return (
            <div>
                <Row>
                <Col span={4} onClick={()=>(this.props.history.push("/"))}>
                <div style={{lineHeight:"1.7rem"}}>
                    <div style={{display:"inline-block",height:"1.7rem"}}>
                        <i style={{fontSize:"0.5rem",margin:"0.1rem 0.4rem 0rem",display:"block"}} className="iconfont">&#xe633;</i>

                    </div>
                </div>
                </Col>
                <Col span={17} style={{height:"1.7rem"}}>
                <div style={{lineHeight:"1.7rem",height:"1.7rem"}}>
                    <div style={{display:"inline-block",height:"1.7rem"}}>
                        <p style={{height:"0.5rem",fontSize:"0.5rem"}}>阳光沙滩和你</p>
                        <p style={{
                            fontSize:"0.3rem",color:"#ccc",height:"1rem",width:"6rem",        
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            }}>G.G(张思源)</p>
                    </div>
                </div>
                </Col>
                <Col span={3}>
                <div style={{lineHeight:"1.8rem"}}>
                    <div style={{display:"inline-block",height:"1.7rem",textAlign:"center",width:"100%"}}>
                        <i style={{fontSize:"0.6rem"}} className="iconfont">&#xe65b;</i>
                    </div>
                </div>
                </Col>
                </Row>
            </div>
            
        )
    }
    // componentWillReceiveProps(nextProps){
        
    //     this.setState({
    //         data:nextProps.data
    //     })   
    //     console.log(111,nextProps.data)
    //   }
    //   componentDidMount() {
    //     //   console.log(11111111,this.state.data)
    //   }
      
}