import Hamburger from "./Hamburger.jsx";
import "../Component/ComponentStyle.css";
const BasicNav=()=>{
    return(
        <div className="nav-cont" style={{width:"100%", margin:"0", height:"60px", display:"flex", justifyContent:"space-around", backgroundColor:"black"}}>
            
            <div style={{width:"50px", height:"50px",}}>
                <Hamburger/>
            </div>
            <p className="company-name">Streetz</p>
        </div>
    )
}

export default BasicNav;