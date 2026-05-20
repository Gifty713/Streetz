import ShopContent from "../Component/ShopContent";
import Nav from "../Component/Nav";
const Shop=()=>{
    return(
        <div>
            <Nav/>
           <p style={{fontSize:"2rem", marginTop:"10px", padding:"0px 20px 0px 20px", fontWeight:"400", marginBottom:"0", fontFamily:"Boldonse, system-ui"}}>Shop</p>
            <ShopContent/>
        </div>
    )
}
export default Shop;