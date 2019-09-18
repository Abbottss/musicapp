import React from "react";

import axios from "axios"
import { Layout } from 'antd';
import Page_Header from "./SongSheet/PageHeader"
import PageContent from "./SongSheet/PageContent"
import PageFooter from "./SongSheet/PageFooter"
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
            <div>
                 <Layout>
                    <Header style={{ position: 'fixed', zIndex: 10, width: '100%',height:"1.7rem",lineHeight:"2.4rem"}}>
                        <Page_Header data={this.state.data}></Page_Header>
                    </Header>
                    <Content style={{ marginTop:"1.8rem", zIndex: 1, width: '100%' }}>
                        <PageContent></PageContent>
                    </Content>
                    <Footer> 
                        <PageFooter></PageFooter>
                    </Footer>
                </Layout>
           
            </div>
        
        )
        
    }
    async getsongSheetDetailsList(id){
        console.log(id)
        const {data} =await axios.get("http://49.232.53.60:8080/playlist/detail?id="+id);
        
        this.setState({
            data
        })
        console.log(this.state.data)
      }
      
       componentDidMount(){
        
         this.getsongSheetDetailsList(this.props.match.params.id)
        //  console.log(this.props.location.state.data)
            
       }
}