import React from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "../../aseets/style/carousel.css";
class Carousel extends React.Component
{
  render(){
    return(
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div className="swiper-slide"><img src="http://p1.music.126.net/vwL8odWLDJNlbAcjEmTHAg==/109951164364411834.jpg" style={{width:'100%'}}/></div>
              <div className="swiper-slide"><img src="http://p1.music.126.net/nqHJXjRK1nDY1YBswWxfzw==/109951164366852338.jpg" style={{width:'100%'}}/></div>
              <div className="swiper-slide"><img src="http://p1.music.126.net/OEMHas0ZlF7HigGyF_C3EA==/109951164366863166.jpg" style={{width:'100%'}}/></div>
            </div>
           
            <div class="swiper-pagination"></div>

        
            {/* <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> */}

           
            <div class="swiper-scrollbar">
</div>
        </div>
    )
}
  componentDidMount(){
    new Swiper('.swiper-container',{
        loop: true, // 循环模式选项
    
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
    
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
    
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
    });
}

}

export default Carousel;
