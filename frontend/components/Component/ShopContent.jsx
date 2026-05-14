import Nav from "./Nav";
import Footer from "./Footer";
import ShopMain from "./ShopMain";
import PullProducts from "./PullProducts";
import { useState } from "react";
const ShopContent=()=>{
    const categories= [{names:"Bottoms", images:"/coverPhotoBottoms.jfif"}, {names:"Tops", images:"/coverPhotoTops.jfif"}, {names:"Footwear", images:"/coverPhotoShoes.jfif"}, {names:"Accessories", images:"/coverPhotoAccessories.jfif"}];
    // state for showing little nav on top of this section
    const [showNav, setShowNav] = useState(false);
    // state to keep track of the category
    const [cat, setCat] = useState("");

    return(
        <div>
            <div style={{backgroundColor:"black"}}>
                <Nav/>
            </div>
            <p style={{textAlign:"center", fontSize:"1.5rem", fontWeight:"500"}}>Shop by Categories</p>
            {showNav && <p style={{fontSize:"1.4rem", textAlign:"center", fontWeight:"500" }}>{cat}</p> }
            {showNav && <p style={{fontSize:"1.3rem", textAlign:"center", fontWeight:"500" }}><span onClick={()=>{setShowNav(false)}}>Products</span> {">"} {cat}</p> }      
            {!showNav && <ShopMain categories={categories} cat={cat} setCat={setCat} setShowNav={setShowNav} showNav={showNav}/>}
            {showNav && <PullProducts cat={cat}/> }  
            <Footer/>    
        </div>
    )
}
export default ShopContent