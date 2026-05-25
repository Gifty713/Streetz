import "./ComponentStyle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { fetchProducts } from "./FetchProducts.jsx";
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
                <Swiper
                modules={[Autoplay]}
                autoplay={{delay: 2000, disableOnInteraction: false, }}
                loop={products.length > 0} 
                >                
                    {screenWidth > 850 ? <SwiperSlide><img src="/bg-laptop.png" alt="Image of swiped product" className="sliding-images"/></SwiperSlide> : <SwiperSlide><img src="/bg_mobilee.png" alt="Image of swiped product" className="sliding-images"/></SwiperSlide> }
                    {products.slice(0, screenWidth > 850 ? 3: 7).map((product)=>{
                        return(
                            <SwiperSlide><img src={product.image} className="sliding-images" alt="Image of swiped product"/></SwiperSlide>                      
                        )
                    })}       
                </Swiper>          
            </div>
        </div>
    )
}
export default Hero;