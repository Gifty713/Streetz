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
           <BasicNav/>
            <Button variant="contained" sx={{backgroundColor:"black", marginTop:"50px", marginLeft:"20px"}}>Add Product</Button>
            <form onSubmit={handleSubmit} >
                <label htmlFor="name">
                    <p>Name of product</p>
                    <input type="text" name="name" style={{height:"30px", fontSize:"1.2rem"}} autoComplete="off"  />
                </label>
                <label htmlFor="description">
                    <p>Description of product</p>
                    <textarea name="description" style={{ fontSize:"1.2rem"}} ></textarea>
                </label>
                <label htmlFor="price">
                    <p>Price of Product</p>
                    <input type="number" name="price" style={{height:"30px", fontSize:"1.2rem"}} autoComplete="off" />
                </label>
                <label htmlFor="image">
                    <p>Image of product</p>
                    <input type="file" name="image" style={{height:"30px", fontSize:"1.2rem"}} autoComplete="off"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AdminProducts