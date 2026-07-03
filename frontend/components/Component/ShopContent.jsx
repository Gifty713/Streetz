import Nav from "./Nav";
import Footer from "./Footer";
import ShopMain from "./ShopMain";
import PullProducts from "./PullProducts";
import ProductDescription from "./ProductDescription";
import { useState } from "react";
const ShopContent=()=>{
    const categories= [{names:"Bottoms", images:"/coverPhotoBottoms.avif"}, {names:"Tops", images:"/coverPhotoTops.avif"}, {names:"Footwear", images:"/coverPhotoShoes.avif"}, {names:"Accessories", images:"/coverPhotoAccessories.avif"}];
    // state for showing little nav on top of this section
    const [showNav, setShowNav] = useState(false);
    // state to keep track of the category
    const [cat, setCat] = useState("");
    function capitalize(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return(
        <div style={{margin:"-10px 0 0 0"}}>
            {!showNav && <p className="shop-name">Shop by Categories</p>}
            {showNav && <p className="shop-category">{capitalize(cat)}</p> }
            {showNav && <p className="shop-direction"><span onClick={()=>{setShowNav(false)}}><u className="shop-direction-products">Products</u></span> {">"} {cat}</p> }      
            {!showNav && <ShopMain categories={categories} cat={cat} setCat={setCat} setShowNav={setShowNav} showNav={showNav}/>}
            {showNav && <PullProducts cat={cat}/> }  
        </div>
    )
}
export default ShopContent