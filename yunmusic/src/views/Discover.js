import React from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Carousel from "./Discover/Carousel"
import {Button,Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default class Home extends React.Component{
    render() {
        return (
          <div>
            
                  <Carousel></Carousel>
 
          </div>
        );
      }
    
    
    
    componentDidMount () {
    
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: true,
          loop: true,
          pagination : {
              el: '.swiper-pagination',
          }
        });
  }
 
}