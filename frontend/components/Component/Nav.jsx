import "./ComponentStyle.css";
import { useState } from "react";
import {Link, NavLink} from "react-router-dom";
const Nav=()=>{
    const cartArray = JSON.parse(localStorage.getItem("productIds"));
    const cartNum = cartArray.length;
    const screenWidth = window.innerWidth;
    const [activeLink, setActiveLink] = useState("");
    const handleActive=(me)=>{
        setActiveLink(me);
    }
    return(
        <div className="nav-container" >
            <div className="nav-cont">
                <div className="nav-con">
                    <div  style={{display:"flex", alignItems:"center",}}>
                        <div className="logo"><img src="/logo2(1).png" alt="logo of streetz" width="85px" /></div>
                        <p className="company-name">Streetz</p>
                    </div>
                    {screenWidth> 850 && <div class="nav-links">
                        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}onClick={()=>{handleActive("home")}}>Home</NavLink>
                        <NavLink to="/shop" className={({ isActive }) => isActive ? "link active" : "link"} onClick={()=>{handleActive("shop")}}>Shop</NavLink>
                        <NavLink to="/cart" className={({ isActive }) => isActive ? "link active" : "link"} onClick={()=>{handleActive("cart")}}>Cart</NavLink>
                    </div>
                    }
                    <Link to="/cart">
                        <div style={{position:"relative"}}> 
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cart-svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_35)"> <rect width="24" height="24" fill="white"></rect> <path d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998" stroke="#000" strokeLinejoin="round"></path> <path d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19" stroke="#000" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="10" cy="20" r="1" stroke="#000" strokeLinejoin="round"></circle> <circle cx="17.5" cy="20" r="1" stroke="#000" strokeLinejoin="round"></circle> </g> <defs> <clipPath id="clip0_15_35"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                            {cartNum >0 && <div className="cart-svg-notif" >{cartNum}</div>}
                        </div>                
                    </Link>
                    <Link to={"/admin/login"} className="admin-btn">
                        Admin
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Nav;