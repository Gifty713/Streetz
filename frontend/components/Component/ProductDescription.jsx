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
    const fetchOne=async()=>{
        try {
            const respond = await fetch(`/api/v1/admin/getoneproduct/${id}`);
            const data = await respond.json();
            await setOneProduct(data || []);             
        } catch (error) {
            console.log("Error in fetching content.");
        }
    }
    useEffect(()=>{
        fetchOne();
        // function for persistent quantity value
        const callQuantity=()=>{
            let currentQuantity;
            const cartArray = JSON.parse(localStorage.getItem("productIds")) || [];
            const index = cartArray.findIndex(oneObj => oneObj.productId == id );
            if(index === -1){
                currentQuantity = 1;
            }else{
                currentQuantity = cartArray[index].number;
                setHandled(true);
            }
            setQuantity(currentQuantity);
        }
        callQuantity();
    }, [])
    // sizes variables
    const [size, setSize] = React.useState(12);
    const sizeClothes = [12,14,16,18,20,22,24];
    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };
    // quantity variables
    const [quantity, setQuantity] = useState(1);
    // Subsequent handle useState
    const [handled, setHandled] = useState(false);
    // Initial push to cart function
    const handleInitialCart=(id)=>{
        const cartArray = JSON.parse(localStorage.getItem("productIds")) || [];
        cartArray.push({"productId":id, "number": quantity, "name":oneProduct.product.name, "size":size, "price":oneProduct.product.price, "image":oneProduct.product.image});
        localStorage.setItem("productIds", JSON.stringify(cartArray));
        setHandled(true);
    }
    // subsequent adding
    const handleSubsequentAdd=(id)=>{
        const cartArray = JSON.parse(localStorage.getItem("productIds"));
        const index = cartArray.findIndex(oneObj => oneObj.productId == id );
        cartArray[index].number += 1;
        localStorage.setItem("productIds", JSON.stringify(cartArray));
    } 
    // susequent removing
    const handleSubsequentRemove = (id)=>{
        const cartArray = JSON.parse(localStorage.getItem("productIds"));
        const index = cartArray.findIndex(oneObj => oneObj.productId == id );
        cartArray[index].number -= 1;
        localStorage.setItem("productIds", JSON.stringify(cartArray));   
    }
    // add to cart feedback function and state
    const [showFeedback, setShowFeedback] = useState(false);
    const cartFeedback =()=>{
        setShowFeedback(true);
        setTimeout(()=>{
        setShowFeedback(false);
        }, 1000)
    } 
    return(
        <div>
            <div style={{marginBottom:"25px"}}>
                <Nav/>
            </div>
            <Link to={"/shop"}
                state={{fromDesc: oneProduct.product}}
            >

                <svg width="40px" height="40px" className="prod-desc-arrow" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z"></path></g></svg>
            </Link>
            {
                oneProduct &&
                <div className="prod-desc-cont">
                    <div className="prod-desc-img-cont">
                        <img className="prod-desc-img" src={oneProduct.product.image} alt="image of product"/>
                    </div>

                    <div className="prod-desc-content-cont">
                        <p className="prod-desc-name">{oneProduct.product.name}</p>
                        <p style={{fontSize:"1.3rem", margin:"10px 0 10px 0px"}}>₦{oneProduct.product.price.toLocaleString("en-US")}.00</p>
                        <div>
                            <FormControl fullWidth >
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
                        { !handled ?
                        <div>
                            <div style={{ display: "flex", alignItems:"center", justifyContent:"space-between",width:"130px", border:"1px solid #BDBDBD"}}>
                                <IconButton onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                                    <RemoveIcon />
                                </IconButton>
                                <span style={{fontSize:"1.2rem"}}>{quantity}</span>
                                <IconButton onClick={() => setQuantity(quantity + 1)}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                            <div className="filter-bar" onClick={()=>{
                                handleInitialCart(oneProduct.product._id) 
                                cartFeedback()}} style={{color:"#fff", backgroundColor:"#000", width:"100%", textAlign:"center", padding:"7px", marginTop:"10px", marginBottom:"10px", cursor:"pointer"}}><p>Add to Cart</p>
                            </div>                   
                        </div>
                        :
                        <div>
                            <div style={{ display: "flex", alignItems:"center", justifyContent:"space-between",width:"130px", border:"1px solid #BDBDBD"}}>
                                <IconButton onClick={() => {
                                    quantity > 1 && setQuantity(quantity - 1);
                                    handleSubsequentRemove(oneProduct.product._id);
                                }
                                }>
                                    <RemoveIcon />
                                </IconButton>
                                <span style={{fontSize:"1.2rem"}}>{quantity}</span>
                                <IconButton onClick={() =>{
                                    setQuantity(quantity + 1)
                                    handleSubsequentAdd(oneProduct.product._id)
                                    } 
                                }>
                                <AddIcon />
                                </IconButton>
                            </div>   
                            <Link to="/cart"><div className="filter-bar" style={{color:"#000", backgroundColor:"#fff",border:"2px solid black", width:"100%", textAlign:"center", padding:"7px", marginTop:"10px", marginBottom:"10px", cursor:"pointer"}}><p>Go to Cart</p></div></Link>                
                        </div>
                        }
                        { // Feedback code
                            showFeedback ?        
                            <div className="feedbackCart" style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)", width:"190px", color:"#fff", backgroundColor:"#000", borderRadius:"8px", opacity:"0.8", padding:"10px", textAlign:"center", display:"flex", justifyContent:"space-around", alignItems:"center", transition:"opacity 0.3s ease-in-out"}}>
                                <svg width="44px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#09e73d"></path> <path d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#fff"></path> </g></svg>
                                <p>Added to Cart</p>
                            </div>
                            :
                            <div className="feedbackCart" style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)", width:"190px", color:"#fff", backgroundColor:"#000", borderRadius:"8px", opacity:"0", padding:"10px", textAlign:"center", display:"flex", justifyContent:"space-around", alignItems:"center",transition:"opacity 0.3s ease-in-out"}}>
                                <svg width="44px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#09e73d"></path> <path d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#fff"></path> </g></svg>
                                <p>Added to Cart</p>
                            </div>                       
                        }
                    </div>
                </div>
            }
        </div>
    )
}
export default ProductDescription;