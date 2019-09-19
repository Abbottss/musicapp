import React from "react";
import "../../aseets/style/PlayMusic/musicPageHeader.css"
import { Row, Col } from 'antd';

export default class PageFooter extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
           <div style={{width:"100%",position:"fixed",left:0,bottom:0}}>
                <div style={{height:"1.7rem"}}>
                    <Row>
                    <Col span={5}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{height:"100%",textAlign:"center",width:"100%"}} ref="PlayMode"  onClick={(event)=>{this.PlayMode(event,event.target)}}>
                        <i style={{name:"1",color:"#fff",display:"block",fontSize:"0.8rem",margin:"0.1rem 0.4rem 0rem"}} className="iconfont">&#xe667;</i>
                        <i style={{name:"2",color:"#fff",display:"none",fontSize:"0.8rem",margin:"0.1rem 0.4rem 0rem"}} className="iconfont">&#xe669;</i>
                        <i style={{name:"3",color:"#fff",display:"none",fontSize:"0.8rem",margin:"0.1rem 0.4rem 0rem"}} className="iconfont">&#xe666;</i>
                        </div>
                    </div>
                    </Col>
                    
                    <Col span={4} style={{height:"1rem"}}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{height:"100%",textAlign:"center",width:"100%"}} ref="AudioPlay"  onClick={()=>{}}>
                        <i style={{color:"#fff",display:"block",fontSize:"0.8rem",margin:"0.1rem 0.4rem 0rem"}} className="iconfont">&#xe663;</i>
                        </div>
                    </div>
                    </Col>
                    <Col span={6}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{height:"100%",textAlign:"center",width:"100%"}} ref="AudioPlay"  onClick={()=>{this.AudioPlay()}}>
                        <i style={{color:"#fff",display:"none",fontSize:"1.5rem",margin:"0.1rem 0.4rem 0rem"}} className="iconfont">&#xe665;</i>
                        <i style={{color:"#fff",display:"block",fontSize:"1.5rem",margin:"0.1rem 0.4rem 0rem"}} className="iconfont">&#xe664;</i>
                        </div>
                    </div>
                    </Col>
                    <Col span={4}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{height:"100%",textAlign:"center",width:"100%"}} ref="AudioSheet" onClick={()=>{}}>
                        <i style={{color:"#fff",display:"block",fontSize:"0.8rem",margin:"0.1rem 0.4rem 0rem",position:"relative",top:"-0.06rem"}} className="iconfont">&#xe670;</i>
                        </div>
                    </div>
                    </Col>
                    <Col span={5}>
                    <div style={{lineHeight:"1rem"}}>
                        <div style={{height:"100%",textAlign:"center",width:"100%"}} ref="AudioSheet" onClick={()=>{}}>
                        <i style={{color:"#fff",display:"block",fontSize:"0.7rem",margin:"0.1rem 0.4rem 0rem",position:"relative",top:"-0.06rem"}} className="iconfont">&#xe60a;</i>
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
    PlayMode(e,v){
        v.style.display="none"
        let siblingss = [];
        let elseLi = v.parentNode.children;
        for (let i = 0, elseLil = elseLi.length; i < elseLil; i++) {
            if (elseLi[i] !== v) {
                siblingss.push(elseLi[i]);
            }
     // this.refs.AudioPlay.children[0].style.display="block"
      }   // this.refs.AudioPlay.children[1].style.display="none"
      let cun=v.style.name
      if(cun!=3){
          cun++
      }else{
          cun=1
      }
      for (let i = 0;i<siblingss.length;i++) {
        if(siblingss[i].style.name/1===cun/1){
            siblingss[i].style.display="block"
        }
      }   
}
}
