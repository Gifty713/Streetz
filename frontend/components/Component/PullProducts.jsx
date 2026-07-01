import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchProducts } from "./FetchProducts";
const PullProducts=({cat})=>{
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetchProducts(setProduct);
    }, [])  
    const filteredProducts = product.filter((prod)=>{return prod.category == cat.toLowerCase()});
    return(
        <div>
            <div className="home-clothes-displayed-shop">
                {product.length === 0 ?
                    <CircularProgress aria-label="Loading…" sx={{marginTop:"20px"}} />
                    :
                    filteredProducts.map((prod)=>{
                        return(
                            <Link to={`/products/${prod._id}`} style={{textDecoration:"none", color:"black"}} key={prod._id}>
                                <div className="home-clothes-img-shop" key={prod._id}>
                                    <img src={prod.image} alt={prod.description} className="pull-product-img"/>                  
                                    <p style={{margin:"0px 0px 0px 0px", fontWeight:"500", fontSize:"1.2rem"}}>{prod.name} </p>
                                    <p className="pull-product-p">₦{prod.price.toLocaleString("en-US")}.00</p>
                                </div>
                            </Link>
                        )
                    })              
                }
            </div>
        </div>
    )
}
export default PullProducts;