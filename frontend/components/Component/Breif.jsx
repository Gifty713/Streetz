import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import "./ComponentStyle.css";
import { fetchProducts } from "./FetchProducts";
import Footer from "./Footer";
import AdminLogin from "./AdminLogin";
import AdminRegister from "./AdminRegister";
const Breif =()=>{
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetchProducts(setProduct);
    }, [])
    const screenWidth = window.innerWidth;
    return(
        <div>
            <div className="breif-cont">
                <p className="breif-heading" >Best Sellers</p>     
                {product.length === 0? 
                <div className="home-clothes-displayed">
                    {
                        [...Array(screenWidth> 850 ? 8 : 4)].map((item,index)=>{
                            return(
                                <div className="home-clothes-img" key={index}>
                                    <Skeleton variant="rectangular" width={"100%"} height={"185px"} animation="wave" />
                                    <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} animation="wave"  />
                                    <Skeleton variant="text" sx={{ fontSize: '1.3rem' }} animation="wave" />
                                </div>
                            )
                        })
                    }
                </div>
                : 
                    <div className="home-clothes-displayed">
                        {product.slice(0,screenWidth> 850 ? 8 : 4).map((prod)=>{
                            return(
                                <Link to={`/products/${prod._id}`} style={{textDecoration:"none", color:"black"}} key={prod._id}>
                                    <div className="home-clothes-img" key={prod._id}>
                                        <img src={prod.image} alt={prod.description}  style={{width:"160px", height:"185px", objectFit: "cover", zIndex:"3", boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }} />
                                        <svg viewBox="0 0 24 24" width="25px" height="25px" className="cart-svg-img" fill="none" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        <p className="product-name-breif">{prod.name} </p>
                                        <p className="product-price-breif" >₦{prod.price.toLocaleString("en-US")}.00</p>
                                    </div>
                                </Link>
                            )
                        })}   
                    </div>             
                }
                <Link to="/shop"><div className="more-bar"><p>SEE MORE</p></div></Link>
            </div>
            <Footer/>
        </div>
    )
}
export default Breif;