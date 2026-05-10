import { useState } from "react"
import BasicNav from "../UIComponents/BasicNav.jsx"
import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const AddProduct = ({childOpenPop, childSetOpenPop, refreshPage}) =>{
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            const formData = new FormData(e.target);
            const respond = await fetch("http://localhost:4000/api/v1/admin/addproduct", {
                method:"POST",
                body: formData
            })
            const data = await respond.json(); 
            console.log(data);     
            childSetOpenPop(false);
            await refreshPage();    
        } catch (err) {
            console.error("Error occurred in fetching products.", err)
        }
    }    
    return(
        <Box>
            <Paper elevation={4} sx={{padding:"10px", marginTop:"-11%",}}>
                <form onSubmit={handleSubmit} style={{display:"block", width:"90%", margin:"0 auto"}}>                    
                    <label htmlFor="name">
                        <p style={{fontSize:"1.4rem", fontWeight:"600", margin:"0 0 12px 0"}}>Title</p>
                        <input type="text" className="input-bar-admin" name="name" style={{height:"30px", width:"85%", height:"50px", border:"1px solid #363434", borderRadius:"10px", padding:"5px 10px", fontSize:"1.4rem", backgroundColor:"#d8d1d1", marginBottom:"25px"}} autoComplete="off" placeholder="Add Title" />
                    </label>
                    <label htmlFor="description">
                        <p style={{fontSize:"1.4rem", fontWeight:"600", margin:"0 0 12px 0"}}>Description</p>
                        <textarea name="description" className="input-bar-admin" style={{height:"30px", width:"85%", height:"120px", border:"1px solid #363434", borderRadius:"10px", padding:"5px 10px", fontSize:"1.4rem", backgroundColor:"#d8d1d1", marginBottom:"25px"}} autoComplete="off" placeholder="Add Description"></textarea>                
                    </label>
                    <label htmlFor="price">
                        <p style={{fontSize:"1.4rem", fontWeight:"600", margin:"0 0 12px 0"}}>Price</p>
                        <input type="number" className="input-bar-admin" name="price" style={{height:"30px", width:"85%", height:"50px", border:"1px solid #363434", borderRadius:"10px", padding:"5px 10px", fontSize:"1.4rem", backgroundColor:"#d8d1d1", marginBottom:"25px"}} autoComplete="off" placeholder="Add Price" />
                    </label>  
                    <label htmlFor="image">
                        <p style={{fontSize:"1.4rem", fontWeight:"600", margin:"0 0 12px 0"}}>Image</p>
                        <input type="file" name="image" style={{height:"30px", fontSize:"1.2rem", marginBottom:"25px"}} autoComplete="off"/>
                    </label>
                    <button type="submit" style={{display:"block", backgroundColor:"black", color:"white", width:"90%", height:"50px", margin:"0 auto" ,fontSize:"1.5rem"  ,padding:"10px", borderRadius:"10px"}}>Save</button>  
                </form>         
            </Paper>
        </Box>
    )
}
export default AddProduct;