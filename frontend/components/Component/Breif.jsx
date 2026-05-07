import { useEffect, useState } from "react";
import "./ComponentStyle.css"
import Footer from "./Footer";
const Breif =()=>{
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                const respond = await fetch("http://localhost:4000/api/v1/admin/getproducts")
                const data = await respond.json();
                setProduct(data.products);
            } catch (err) {
                console.error("Error in fetching products", err);
            }       
        }
        fetchProducts();
    }, [])

    return(
        <div style={{position:"relative", width:"100%", zIndex:"3"}}>
            <p style={{padding:"0px 0px 0px 28px", fontSize:"1.5rem", fontWeight:"400", letterSpacing:"1px", fontFamily: "Boldonse, system-ui"}}>Best Sellers</p>
            <div className="home-clothes-displayed">
                {product.slice(0,4).map((prod)=>{
                    return(
                        <div className="home-clothes-img" key={prod._id}>
                            <img src={prod.image} alt={prod.description} style={{width:"100%", height:"185px", objectFit: "cover", zIndex:"3" }} />
                            <svg viewBox="0 0 24 24" width="43px" height="43px" fill="none" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:"#000", padding:"10px", borderRadius:"50%", position:"absolute", top:"50%", left:"68%"}}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            <p style={{margin:"0px 0px 0px 0px", fontWeight:"500", fontSize:"1.2rem"}}>{prod.name} </p>
                            <p style={{margin:"0px 0px 0px 0px", fontSize:"1.3rem", letterSpacing:"0.7px"}}>₦{prod.price.toLocaleString("en-US")}.00</p>
                        </div>
                    )
                })}   
            </div>
            <div className="filter-bar" style={{color:"#fff", backgroundColor:"#000", width:"100%", textAlign:"center", padding:"7px", marginTop:"10px"}}><p>SEE MORE</p></div>
            <Footer/>
        </div>
    )
}
export default Breif;