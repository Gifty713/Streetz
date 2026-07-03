import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import "./ComponentStyle.css";
const NavAdmin=()=>{
    const screenWidth = window.innerWidth
    return(
        <div style={{height:"60px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", zIndex:"1000"}}>
            <div className="nav-cont" style={{width:"100%", height:"55px", display:"flex", justifyContent:"space-between",padding:"0px 5px 0px 20px" , alignItems:"center", backgroundColor:"#fff", position:"fixed", zIndex:"1000" }}>
                {/* <div style={{display:"flex", alignItems:"center",}}>
                    <div className="logo"><img src="/logo2(1).png" alt="logo of streetz" width="85px" /></div>
                    <p className="company-name">Streetz</p>
                </div> */}
                
                <div className="nav-con">
                    <div  style={{display:"flex", alignItems:"center",}}>
                        <div className="logo"><img src="/logo2(1).png" alt="logo of streetz" width="85px" /></div>
                        <p className="company-name">Streetz</p>
                    </div>
                    {screenWidth> 850 && <div class="nav-links">
                        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "link active" : "link"}onClick={()=>{handleActive("home")}}>DashBoard</NavLink>
                        <NavLink to="/admin/products" className={({ isActive }) => isActive ? "link active" : "link"} onClick={()=>{handleActive("shop")}}>Products</NavLink>
                    </div>
                    }
                    <div style={{position:"relative", paddingRight:"20px"}}> 
                        <Avatar>A</Avatar>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default NavAdmin;