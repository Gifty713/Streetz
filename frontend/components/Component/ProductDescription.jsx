import { useParams, Link } from "react-router-dom";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const ProductDescription=()=>{
    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState("");
    useEffect(()=>{
        const fetchOne=async()=>{
            try {
                const respond = await fetch(`http://localhost:4000/api/v1/admin/getoneproduct/${id}`);
                const data = await respond.json();
                await setOneProduct(data);             
            } catch (error) {
                console.log("Error in fetching content.");
            }
        }
        fetchOne()
    }, [])
    // sizes variables
    const [size, setSize] = React.useState('');
    const sizeClothes = [12,14,16,18,20,22,24];
    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };
    // quantity variables
    const [quantity, setQuantity] = useState(1);
    // Push to Cart function
    let keys = [];
    const handleAddCart=(id)=>{
        const cartArray = JSON.parse(localStorage.getItem("productIds")) || [];
        console.log(keys)
        if (!keys.includes(id)){
            cartArray.push({"productId":id, "number": 1});
        }else{
            const index = cartArray.findIndex(oneObj => oneObj.productId == id );
            console.log(index)
            cartArray[index].number += 1;
        }
        localStorage.setItem("productIds", JSON.stringify(cartArray));
        keys = cartArray.map(key => key.productId);
        console.log(cartArray);
    }
    return(
        <div>
            <div style={{backgroundColor:"black", marginBottom:"25px"}}>
                <Nav/>
            </div>
            {/* {oneProduct && <p>And my name is {oneProduct.product.name}</p> } */}
            {
                oneProduct &&
                <div style={{width:"90%", display:"block", margin:"0 auto"}}>
                    <img src={oneProduct.product.image} alt="image of product" style={{height:"50vh", width:"100%", display:"block", margin:"0 auto"}} />
                    <p style={{fontSize:"1.5rem", fontWeight:"500", margin:"10px 0 0 0"}}>{oneProduct.product.name}</p>
                    <p style={{fontSize:"1.3rem", margin:"10px 0 10px 0px"}}>₦{oneProduct.product.price.toLocaleString("en-US")}.00</p>
                    {/* <p>{oneProduct.product.description}</p> */}
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Size</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="Size"
                            onChange={handleChangeSize}
                            >
                            {sizeClothes.map(size=>{
                                return(
                                    <MenuItem value={size}>{size}</MenuItem>
                                )
                            })}
                            </Select>
                        </FormControl>
                    </div>
                    <p style={{fontSize:"1.1rem", margin:"10px 0 10px 0"}}>Quantity</p>
                    <div style={{ display: "flex", alignItems:"center", justifyContent:"space-between",width:"130px", border:"1px solid #BDBDBD"}}>
                        <IconButton onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                            <RemoveIcon />
                        </IconButton>
                        <span style={{fontSize:"1.2rem"}}>{quantity}</span>
                        <IconButton onClick={() => setQuantity(quantity + 1)}>
                            <AddIcon />
                        </IconButton>
                    </div>
                    <div className="filter-bar" onClick={()=>{handleAddCart(oneProduct.product._id)}} style={{color:"#fff", backgroundColor:"#000", width:"100%", textAlign:"center", padding:"7px", marginTop:"10px"}}><p>Add to Cart</p></div>
                </div>
            }

        </div>
    )
}
export default ProductDescription;