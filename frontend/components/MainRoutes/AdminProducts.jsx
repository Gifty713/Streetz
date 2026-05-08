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
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:"black"}}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <svg fill="#000000" width="30px" height="30px" viewBox="0 0 48 48" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M42,3H28a2,2,0,0,0-2-2H22a2,2,0,0,0-2,2H6A2,2,0,0,0,6,7H42a2,2,0,0,0,0-4Z"></path><path d="M39,9a2,2,0,0,0-2,2V43H11V11a2,2,0,0,0-4,0V45a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V11A2,2,0,0,0,39,9Z"></path><path d="M21,37V19a2,2,0,0,0-4,0V37a2,2,0,0,0,4,0Z"></path><path d="M31,37V19a2,2,0,0,0-4,0V37a2,2,0,0,0,4,0Z"></path></g></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminProducts