import "./UIComponentStyle.css"
import { useState } from "react";
function Hamburger() {
  const [active, setActive] = useState(false);

  const handleClick =()=>{
    setActive(!active);
  }

  return (
  <div style={{display:"flex"}}>
    <div className={active? "ham-menu active" : "ham-menu"}  onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={active? "off-screen-menu active" : "off-screen-menu"}>
      {/* <p>About Us</p> */}
      {/* <p>Vision and Achievements </p>
      <p>Investment Process</p>
      <p>Investment Options</p>
      <p>Parent Company: Xymbolic Development</p>
      <p>Contact Us</p> */}
    </div>
  </div>

  );
}

export default Hamburger;