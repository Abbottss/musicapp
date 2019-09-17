import React from "react";
import { Row, Col } from 'antd';
import axios from "axios"
import "../../aseets/style/Discover/NewDish__NewSong.css";
export default class NewDish__NewSong extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            NewDish__NewSongList:[]
        }
    }
    render(){
        return (
            <div className="NewDish__NewSong">
                <div className="NewDish__NewSong-top">
                    <Row type="flex" justify="space-between">
                        <Col span={7}>
                            <span className="NewDish__NewSong-title">新碟</span>  |  <span className="NewDish__NewSong-title">新歌</span>
                              
                        </Col>
                        
                        
                        <Col span={7}>
                            <span className="NewDish__NewSong-square">更多新碟</span>
                        </Col>
                    </Row>
                </div>
                <div className="NewDish__NewSong-bottom">
                     <Row type="flex" justify="space-around">
                    {
                    (this.state.NewDish__NewSongList).map((item,i)=>(
                    (
                        <Col span={7} className="NewDish__NewSong-Row" style={{"WebkitBoxOrient": "vertical",marginBottom:"10px"}}>
                                <div>
                                    <img style={{marginBottom:"10px"}} src={item.blurPicUrl} style={{width:'100%'}}/>
                                </div>
                                <span className="NewDish__NewSong-font">{item.name}</span>
                            </Col>
                    )
                    
                    ))
                    }
                            
                    </Row>
                </div>
               
            </div>
        )
        
    }
    async getNewDish__NewSongList(){
        const {data} =await axios.get(`http://localhost:4000/top/album?offset=0&limit=3`);
        this.setState({
            NewDish__NewSongList:data.albums
        })
      }
      
       async componentDidMount(){
            this.getNewDish__NewSongList()
       }
}