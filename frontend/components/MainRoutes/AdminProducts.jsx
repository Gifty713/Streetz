import { useState } from "react"
import BasicNav from "../UIComponents/BasicNav.jsx"
import Button from "@mui/material/Button"
const AdminProducts = ()=>{
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
        } catch (err) {
            console.error("Error occurred in fetching products.", err)
        }
    }

    return(
        <div>
           <p style={{fontSize:"2rem", marginTop:"10px", padding:"0px 20px", fontWeight:"600", marginBottom:"0"}}>Products</p>
            <Button variant="contained" sx={{display:"block", backgroundColor:"black", marginTop:"0px",padding:"10px",cursor:"pointer", marginLeft:"auto", marginRight:"10%", borderRadius:"10px"}}>Add Product</Button>
            <form onSubmit={handleSubmit}>
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
                    <input type="file" name="image" style={{height:"30px", fontSize:"1.2rem"}} autoComplete="off"/>
                </label>
                <button type="submit" style={{display:"block"}}>Save</button>  
            </form>
        </div>
    )
}
export default AdminProducts
            // <form onSubmit={handleSubmit} >
            //     <label htmlFor="name">
            //         <p>Name of product</p>
            //         <input type="text" name="name" style={{height:"30px", fontSize:"1.2rem"}} autoComplete="off"  />
            //     </label>
            //     <label htmlFor="description">
            //         <p>Description of product</p>
            //         <textarea name="description" style={{ fontSize:"1.2rem"}} ></textarea>
            //     </label>
            //     <label htmlFor="price">
            //         <p>Price of Product</p>
            //         <input type="number" name="price" style={{height:"30px", fontSize:"1.2rem"}} autoComplete="off" />
            //     </label>
            //     <label htmlFor="image">
            //         <p>Image of product</p>
            //         <input type="file" name="image" style={{height:"30px", fontSize:"1.2rem"}} autoComplete="off"/>
            //     </label>
            //     <button type="submit">Submit</button>
            // </form>