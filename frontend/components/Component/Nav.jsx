import Hamburger from "../UIComponents/Hamburger.jsx";
import "./ComponentStyle.css";
const Nav=()=>{
    const cartArray = JSON.parse(localStorage.getItem("productIds"));
    const cartNum = cartArray.length;
    const screenWidth = window.innerWidth
    return(
        <div style={{height:"60px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", zIndex:"1000"}}>
            <div className="nav-cont" style={{width:"100%", height:"55px", display:"flex", justifyContent:"space-between",padding:"0px 5px 0px 20px" , alignItems:"last baseline", backgroundColor:"#fff", position:"fixed", zIndex:"1000" }}>
                <div style={{display:"flex", alignItems:"center",}}>
                    <div className="logo"><img src="/logo2(1).png" alt="logo of streetz" width="85px" /></div>
                    <p className="company-name">Streetz</p>
                </div>
                <div style={{position:"relative"}}> 
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"35px", height:"35px", marginRight:"20px"}}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_35)"> <rect width="24" height="24" fill="white"></rect> <path d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998" stroke="#000" strokeLinejoin="round"></path> <path d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19" stroke="#000" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="10" cy="20" r="1" stroke="#000" strokeLinejoin="round"></circle> <circle cx="17.5" cy="20" r="1" stroke="#000" strokeLinejoin="round"></circle> </g> <defs> <clipPath id="clip0_15_35"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                   {cartNum >0 && <div style={{width:"22px", height:"22px", borderRadius:"50%", background:"#FF0000", position:"absolute", top:"7%", left:"41%",textAlign:"center", paddingTop:"1px", paddingLeft:"2px", fontSize:"0.9rem", fontWeight:"600", color:"#fff"}}>{cartNum}</div>}
                </div> 
            </div>
        </div>
    )
}
export default Nav;