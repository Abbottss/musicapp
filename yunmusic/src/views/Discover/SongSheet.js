import React from "react";

import axios from "axios"
import { Layout } from 'antd';
import "./../../aseets/style/SongSheet/antPageHeader.css";
import Page_Header from "./SongSheet/PageHeader"
import PageContent from "./SongSheet/PageContent"
import PageFooter from "./SongSheet/PageFooter"
import Audio from "../../components/audio/Audio"
const { Header, Footer, Sider, Content } = Layout;




export default class SongSheet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            SongSheetList:[]
        }
    }
    render(){
        
        return (
            <div style={{
                background:"url(http://p1.music.126.net/rLB8iPg-vowAbesPI4CSuw==/109951163975879537.jpg) repeat-x",
                height:"100%",
                backgroundSize:"100%"
                }}>
                 <Layout>
                    <Header style={{ position: 'fixed', zIndex: 10, width: '100%',height:"1.7rem",lineHeight:"2.4rem"}}>
                        <Page_Header {...this.props}  data={this.state.data}></Page_Header>
                    </Header>
                 </Layout>   
                    <div className="SongSheet-content" style={{marginTop:"1.8rem", zIndex: 1, width: '100%',paddingTop:"0.5rem",height:"100%"}}>
                        <PageContent key={this.state.key} {...this.props} data={this.state.data}></PageContent>
                        {/* {this.state.data.playlist.adType} */}
                    </div>
                    <div> 
                        <PageFooter  {...this.props} data={this.state.data}></PageFooter>
                    </div>
                    <div>
                        <Audio></Audio>
                    </div>
                
           
            </div>
        
        )
        
    }
    async getsongSheetDetailsList(id){
        console.log(id)
        const {data} =await axios.get("http://49.232.53.60:8080/playlist/detail?id="+id);
        
        this.setState({
            data:data
        },()=>{ console.log(6,this.state.data)})
        // console.log(this.state.data)
     
      }
      
       componentDidMount(){
       
             this.getsongSheetDetailsList(this.props.match.params.id)
            console.log(999999,this.state.data)
        
        //  console.log(7,this.props.location.state.data)
            
       }
              
       
}