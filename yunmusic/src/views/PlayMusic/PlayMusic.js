import React from "react";
import axios from "axios"
import { Layout } from 'antd';
import Page_Header from "./PageHeader"
import Page_Footer from "./PageFooter"
const { Header, Footer, Sider, Content } = Layout;
class PlayMusic extends React.Component{
	render(){
		return (
			<div style={{
                // background:"url(http://p1.music.126.net/rLB8iPg-vowAbesPI4CSuw==/109951163975879537.jpg) repeat-x",
                height:"100%",
                // backgroundSize:"100%"
                }}>
				<Layout>
                    <Header style={{ position: 'fixed', zIndex: 10, width: '100%',height:"1.7rem",lineHeight:"2.4rem"}}>
                        <Page_Header></Page_Header>
                    </Header>
                 </Layout>   
                 <div> 
                        <Page_Footer></Page_Footer>
                </div>
			</div>
		)
	}
}
export default PlayMusic;