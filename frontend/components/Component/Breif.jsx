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
                {product.map((prod)=>{
                    return(
                        <div className="home-clothes-img" key={prod._id}>
                            <img src={prod.image} alt="Clothes" style={{width:"100%", height:"150px", objectFit: "cover", zIndex:"3" }} />
                            {/* cart icon*/}
                            <p style={{margin:"0px 0px 0px 0px"}}>{prod.name} </p>
                            <p style={{margin:"3px 0px 0px 0px"}}>{prod.description}</p>
                            <p style={{margin:"3px 0px 0px 0px"}}>#{prod.price}</p>
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