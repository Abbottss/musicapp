import React from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Carousel from "./Discover/Carousel"
import axios from "axios"
import {Button,Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default class Home extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//        banner:[]
//     }
// }
    render() {
        return (
          <div>
            
                  <Carousel></Carousel>
 
          </div>
        );
      }
    
    //   async getBannerList(){
    //     const {data} = await axios.get(`http://localhost:4000/banner?type=1`);
    //     this.setState({
    //         banner:data
    //     })
    //     // console.log(this.state.banner)
    // }
    
    componentDidMount () {
    //轮播图
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: true,
          loop: true,
          pagination : {
              el: '.swiper-pagination',
          }
        });

        // this.getBannerList()
  }
 
}