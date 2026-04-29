import Hamburger from "../UIComponents/Hamburger.jsx";
import "./ComponentStyle.css";
const Nav=()=>{
    return(
        <div className="nav-cont" style={{width:"95%", margin:"0 5px", height:"60px", display:"flex", justifyContent:"space-around"}}>
            <div style={{width:"50px", height:"50px",}}>
                <Hamburger/>
            </div>
            <p className="company-name">Streetz</p>
            {/* Svg search */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"30px", height:"30px"}}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_152)"> <rect width="24" height="24" fill="#000"></rect> <circle cx="10.5" cy="10.5" r="6.5" stroke="#fff" strokeLinejoin="round"></circle> <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#fff"></path> </g> <defs> <clipPath id="clip0_15_152"> <rect width="24" height="24" fill="#fff"></rect> </clipPath> </defs> </g></svg>
            {/* Svg cart */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"30px", height:"30px"}}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_35)"> <rect width="24" height="24" fill="#000"></rect> <path d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998" stroke="#fff" strokeLinejoin="round"></path> <path d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="10" cy="20" r="1" stroke="#fff" strokeLinejoin="round"></circle> <circle cx="17.5" cy="20" r="1" stroke="#fff" strokeLinejoin="round"></circle> </g> <defs> <clipPath id="clip0_15_35"> <rect width="24" height="24" fill="#000"></rect> </clipPath> </defs> </g></svg>
        </div>
    )
}
export default Nav;