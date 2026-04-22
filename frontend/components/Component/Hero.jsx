import Hamburger from "../UIComponents/Hamburger.jsx";
import "./ComponentStyle.css";
const Hero=()=>{
    return(
        <div className="hero-cont">
            <div className="nav-cont" style={{width:"95%", backgroundColor:"#fff", margin:"0 5px", height:"60px", display:"flex", justifyContent:"space-around"}}>
                <div style={{width:"50px", height:"50px",}}>
                    <Hamburger/>
                </div>
                <p className="company-name">Streetz</p>
                {/* Svg search */}
                <p>S</p>
                {/* Svg cart */}
                <p>C</p>
            </div>
        </div>
    )
}
export default Hero;