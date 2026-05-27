import "./ComponentStyle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { fetchProducts } from "./FetchProducts.jsx";
import "swiper/css/effect-coverflow";
import 'swiper/css';
import Nav from "./Nav.jsx";
import { useEffect, useState } from "react";
const Hero=()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetchProducts(setProducts);
    }, []);
    const screenWidth = window.innerWidth

    return(
        <div >
            <Nav/>
            <div className="hero-cont">
                {screenWidth < 850 ?
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{delay: 2000, disableOnInteraction: false, }}
                        loop={products.length > 0} 
                    >                
                        <SwiperSlide><img src="/bg_mobilee.png" alt="Image of swiped product" className="sliding-images"/></SwiperSlide> 
                        {products.slice(0, 3).map((product)=>{
                            return(
                                <SwiperSlide><img src={product.image} className="sliding-images" alt="Image of swiped product"/></SwiperSlide>                      
                            )
                        })}       
                    </Swiper>  
                :
                    <Swiper
                        autoplay={{delay: 2000, disableOnInteraction: false, }}
                        slidesPerView={2}
                        centeredSlides={true}
                        effect="coverflow"
                        modules={[Autoplay, EffectCoverflow]}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false,
                            scale: 1,
                        }}
                    >                
                        <SwiperSlide><img src="/bg_mobilee.png" alt="Image of swiped product" className="sliding-images"/></SwiperSlide> 
                        {products.slice(0, 7).map((product)=>{
                            return(
                                <SwiperSlide><img src={product.image} className="sliding-images" alt="Image of swiped product"/></SwiperSlide>                      
                            )
                        })}       
                    </Swiper>                              
                }
            </div>
        </div>
    )
}
export default Hero;