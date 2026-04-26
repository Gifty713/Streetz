    import "./ComponentStyle.css";
import Nav from "./Nav.jsx";
const Hero=()=>{
    return(
        <div className="hero-cont">
            <Nav/>
            <div className="nav-tab-below">
                <p>Home</p>
                <p>Search</p>
                <p>Shop</p>
                <p>Cart</p>
            </div>
        </div>
    )
}
export default Hero;