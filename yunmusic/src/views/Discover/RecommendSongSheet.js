import React from "react";
import { Row, Col } from 'antd';
import axios from "axios"
import "../../aseets/style/Discover/recommendsongsheet.css";
export default class RecommendSongSheet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            RecommendSongSheetList:[]
        }
    }
    render(){
        return (
            <div className="RecommendSongSheet">
                <div className="RecommendSongSheet-top">
                    <Row type="flex" justify="space-between">
                        <Col span={7}>
                            <span className="RecommendSongSheet-title">推荐歌单</span>
                        </Col>
                        
                        
                        <Col span={7}>
                            <span className="RecommendSongSheet-square">歌单广场</span>
                        </Col>
                    </Row>
                </div>
                <div className="RecommendSongSheet-bottom">
                     <Row type="flex" justify="space-around">
                    {
                    (this.state.RecommendSongSheetList).map((item,i)=>(
                    (
                        <Col span={7} className="RecommendSongSheet-Row" style={{"WebkitBoxOrient": "vertical",marginBottom:"10px"}}>
                                <div>
                                    <img style={{marginBottom:"10px"}} src={item.picUrl} style={{width:'100%'}}/>
                                </div>
                                <span className="RecommendSongSheet-font">{item.name}</span>
                            </Col>
                    )
                    
                    ))
                    }
                            
                    </Row>
                </div>
               
            </div>
        )
        
    }
    async getRecommendSongSheetList(){
        const {data} =await axios.get(`http://localhost:4000/personalized?limit=6`);
        this.setState({
            RecommendSongSheetList:data.result
        })
      }
      
       async componentDidMount(){
            this.getRecommendSongSheetList()
       }
}