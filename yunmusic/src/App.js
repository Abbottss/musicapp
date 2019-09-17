import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Common from "./views/Common";
import Login from "./views/Login";
import Cellphone from "./views/Cellphone";
import {
<<<<<<< HEAD
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
class App extends Component{
	render(){
		return (
			<Router>
				<Switch>
					<Route path={"/login"} component={Login}></Route>
					<Route path={"/cellphone"} component={Cellphone}></Route>	
					<Route path={"/"} component={Common}></Route>
				</Switch>
			</Router>
		)
	}
=======
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
                                    <Col span={4}><NavLink to={"/my"} activeStyle={{color:'#fff',fontSize:'68px',position:"relative",top:"-2px"}}>我的</NavLink></Col>
                                    <Col span={4}><NavLink to={"/discover"} activeStyle={{color:'#fff',fontSize:'68px',position:"relative",top:"-2px"}}>发现</NavLink></Col>
                                    <Col span={4}><NavLink to={"/yunvillage"} activeStyle={{color:'#fff',fontSize:'68px',position:"relative",top:"-2px"}}>云村</NavLink></Col>
                                    <Col span={4}><NavLink to={"/video"} activeStyle={{color:'#fff',fontSize:'68px',position:"relative",top:"-2px"}}>视频</NavLink></Col>
                                    <Col span={4}><NavLink to={"/search"} activeStyle={{color:'#fff',fontSize:'68px',position:"relative",top:"-2px"}}>搜索</NavLink></Col>
                                    
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

>>>>>>> fecbb1921ce78d230d90d6de77ed2188df7f0b0c
}
export default App;