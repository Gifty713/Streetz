import ShopContent from "../Component/ShopContent";
import Nav from "../Component/Nav";
const Shop=()=>{
    return(
        <div>
            <Nav/>
            <div className="shop-cont">
                <p className="shop-main-title">Shop</p>
                <ShopContent/>
            </div>
        </div>
    )
}
export default Shop;