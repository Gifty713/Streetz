import Nav from "./Nav";
import Footer from "./Footer";
import "./ComponentStyle.css";
const ShopContent=()=>{
    const categories= [{names:"Bottoms", images:"/coverPhotoBottoms.jfif"}, {names:"Tops", images:"/coverPhotoTops.jfif"}, {names:"Footwear", images:"/coverPhotoShoes.jfif"}, {names:"Accessories", images:"/coverPhotoAccessories.jfif"}];
    return(
        <div>
            <div style={{backgroundColor:"black"}}>
                <Nav/>
            </div>
            <p style={{textAlign:"center", fontSize:"1.5rem", fontWeight:"500"}}>Shop by Categories</p>
            <div className="home-clothes-displayed">
                {categories.map((category, id)=>{
                    return(
                        <div className="home-clothes-img" key={id}  >
                            <img src={category.images} style={{width:"100%", height:"185px", objectFit: "cover", zIndex:"3", margin:"0 0", boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}} alt="image of category"/>
                            <p style={{fontSize:"1.5rem", margin:"0 0"}}>{category.names}</p>
                        </div>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}
export default ShopContent