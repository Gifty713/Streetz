import CartContent from "../Component/CartContent.jsx";
import Nav from "../Component/Nav.jsx";
const Cart=()=>{
    return(
        <div>
           <p style={{fontSize:"2rem", marginTop:"10px", padding:"0px 20px 15px 20px", fontWeight:"400", marginBottom:"0", fontFamily:"Boldonse, system-ui"}}>Shopping Cart</p>
            <CartContent/>
        </div>
    )
}
export default Cart;
