import React from 'react';
import logo from './logo.svg';
import './App.css';
import './aseets/style/background.css';
import My from "./views/My";                    //我的
import Discover from "./views/Discover";        //发现
import YunVillage from "./views/YunVillage";    //云村
import Video from "./views/Video";              //视频
import Search from "./views/Search";            //搜索
import {Button,Layout} from 'antd';
import { Row, Col } from 'antd';
import DrawerLeft from "./components/Drawer"    //个人信息展开栏（抽屉）
import Carousel from "./views/Discover/Carousel"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
} from "react-router-dom"
const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component{
    render(){
        return (

            <div >
                <Router>
                    <Layout> 
                        <Header>
                            <Row type="flex" justify="space-between">
                                <nav className="App-header">
                            
                                    <Col span={4}><DrawerLeft></DrawerLeft></Col>
                                    <Col span={4}><NavLink to={"/my"} activeStyle={{color:'#fff',fontSize:'16px'}}>我的</NavLink></Col>
                                    <Col span={4}><NavLink to={"/discover"} activeStyle={{color:'#fff',fontSize:'16px'}}>发现</NavLink></Col>
                                    <Col span={4}><NavLink to={"/yunvillage"} activeStyle={{color:'#fff',fontSize:'16px'}}>云村</NavLink></Col>
                                    <Col span={4}><NavLink to={"/video"} activeStyle={{color:'#fff',fontSize:'16px'}}>视频</NavLink></Col>
                                    <Col span={4}><NavLink to={"/search"} activeStyle={{color:'#fff',fontSize:'16px'}}>搜索</NavLink></Col>
                                    
                                </nav>
                            </Row>
                        </Header>
                    </Layout>
                        <Switch>
                                    
                            <Route path={"/my"} component={My}></Route>
                            <Route path={"/discover"} component={Discover}></Route>
                            <Route path={"/yunvillage"} component={YunVillage}></Route>
                            <Route path={"/video"} component={Video}></Route>
                            <Route path={"/search"} component={Search}></Route>
                            <Redirect from="/" to="/discover" />
                        </Switch>
                </Router> 
                       
                   
                    {/* <Content>
                        <Carousel></Carousel> 
                        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
                        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
                    </Content>
                   
                    <Footer>
                        111
                    </Footer> */}
                
                
                
            </div>
            // mountNode,
            
        );
    }
  // return (
  //   <div className="App">

  //   </div>
  // );

}

export default App;
