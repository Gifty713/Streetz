import Button from "@mui/material/Button"
import AddProduct from "../Component/AddProduct"
import { useState } from "react"
const AdminProducts = ()=>{
    // State to open add product pop up
    const [openPop, setOpenPop] = useState(false);
    return(
        <div>
           <p style={{fontSize:"2rem", marginTop:"10px", padding:"0px 20px", fontWeight:"600", marginBottom:"0"}}>Products</p>
            {openPop ? <svg viewBox="0 0 24 24" width={"50px"} height={"50px"} xmlns="http://www.w3.org/2000/svg" fill="#FF0000" style={{fontSize:"1.8rem", display:"block", width:"fit-content", color:"red", margin:"0 10% -35px auto"}} onClick={()=>{setOpenPop(false)}}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#FF0000" strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path> </g></svg>
                : <Button variant="contained" sx={{display:"block", backgroundColor:"black", marginTop:"0px",padding:"10px",cursor:"pointer", marginLeft:"auto", marginRight:"10%", borderRadius:"10px",zIndex:"0"}} onClick={()=>{setOpenPop(true)}}>Add Product</Button>}
            {openPop && <AddProduct childOpenPop = {openPop} childSetOpenPop={setOpenPop} /> }
            <div style={{display:"flex", padding:"10px 10px 10px 20px", justifyContent:"space-between", width:"74%", alignItems:"center"}}>
                <div>
                    <img src="/jacket.jpg" width="90px" height="90px" alt="clothes" />
                </div>
                <div>
                    <p style={{fontSize:"1.4rem", marginBottom:"0px"}}>Name of product</p>
                    <div style={{display:"flex",  justifyContent:"space-between",width:"100%" ,marginTop:"0px", alignItems:"baseline"}}>
                        <p style={{fontSize:"1.3rem", marginTop:"0px",}}>#1000</p>
                        <p style={{marginTop:"0px",}}>25 stocks</p>
                    </div>
                    <div style={{display:"flex"}}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminProducts