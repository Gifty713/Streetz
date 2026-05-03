import { useState } from "react"
import BasicNav from "../UIComponents/BasicNav.jsx"
import Button from "@mui/material/Button"
const AdminProducts = ()=>{
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    return(
        <div>
           <BasicNav/>
            <Button variant="contained" sx={{backgroundColor:"black", marginTop:"50px", marginLeft:"20px"}}>Add Product</Button>
            <form action="">
                <label htmlFor="">
                    <p>Name of product</p>
                    <input type="text" name="name" style={{height:"30px", fontSize:"1.2rem"}} onChange={(e)=>{setName(e.target.value)}} />
                </label>
                <label htmlFor="">
                    <p>Description of product</p>
                    <textarea name="description" id="" style={{ fontSize:"1.2rem"}} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                </label>
                <label htmlFor="">
                    <p>Price of Product</p>
                    <input type="number" name="price" style={{height:"30px", fontSize:"1.2rem"}} onChange={(e)=>{setPrice(e.target.value)}} />
                </label>
                <label htmlFor="">
                    <p>Image of product</p>
                    <input type="file" name="image" style={{height:"30px", fontSize:"1.2rem"}} onChange={(e)=>{setImage(e.target.value)}} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AdminProducts