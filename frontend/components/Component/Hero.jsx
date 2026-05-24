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
    return(
        <div >
            <Nav/>
            <div className="hero-cont">
                <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500, 
                    disableOnInteraction: false, 
                }}
                
                loop={products.length > 0} 
                >                
                    <SwiperSlide><img src="/bg_mobilee.png" alt="Image of swiped product" style={{height:"55vh", width:"100%"}}/></SwiperSlide>
                    {products.slice(0, 3).map((product)=>{
                        return(
                            <SwiperSlide><img src={product.image} alt="Image of swiped product" style={{height:"55vh", width:"100%"}}/></SwiperSlide>                      
                        )
                    })}       
                </Swiper>          
            </div>
        </div>
    )
}
export default Hero;