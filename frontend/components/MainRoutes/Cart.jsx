import CartContent from "../Component/CartContent.jsx";
import Nav from "../Component/Nav.jsx";
const Cart=()=>{
    return(
        <div>
            <Nav/>
            <div className="cart-whole-cont">
                <p style={{fontSize:"2rem", marginTop:"10px", padding:"0px 20px 15px 20px", fontWeight:"400", marginBottom:"0", fontFamily:"Boldonse, system-ui"}}>Shopping Cart</p>
                <CartContent/>
            </div>
        </div>
    )
}
export default Cart;
