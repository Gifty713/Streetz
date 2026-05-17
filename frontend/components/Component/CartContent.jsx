import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";
const CartContent=()=>{
    const cartDisplayed = JSON.parse(localStorage.getItem("productIds"))|| [];
    // watches the change in value
    const[watcher, setWatcher]= useState();
    const handleIncrease=(id)=>{
        const index = cartDisplayed.findIndex(oneObj => oneObj.productId == id );
        cartDisplayed[index].number += 1;
        localStorage.setItem("productIds", JSON.stringify(cartDisplayed));  
        setWatcher(cartDisplayed[index].number)    
    }
    const handleDecrease=(id)=>{
        const index = cartDisplayed.findIndex(oneObj => oneObj.productId == id );
        cartDisplayed[index].number += 1;
        localStorage.setItem("productIds", JSON.stringify(cartDisplayed));   
        setWatcher(cartDisplayed[index].number)    
    }
    // refreshes on change of watcher
    useEffect(()=>{}, [watcher]);
    return(
        <div className="cart-cont" style={{padding:"0px 20px 20px 20px"}}>
            {cartDisplayed.map((cartItem)=>{
                return(
                    <div key={cartItem.productId} className="cart-item" style={{width:"80%", display:"block", marginBottom:"15px"}} >
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <div style={{width:"40%"}}>
                                <img src={cartItem.image} width="120px" height="120px" alt="Image of product" />
                            </div>
                            <div style={{width:"50%"}} >
                                <p style={{fontWeight:"500", fontSize:"1.1rem", margin:"0 0 0px 0"}}>{cartItem.name}</p>
                                <p style={{margin:"0 0 0px 0", color:"#808080", fontSize:"1rem"}}>Size: {cartItem.size}</p>
                                <p style={{margin:"0 0 0 0", fontSize:"1.2rem", }}>₦{cartItem.price.toLocaleString("en-US")}.00</p>
                                <div style={{ display: "flex", alignItems:"center", justifyContent:"space-between",width:"130px", border:"1px solid #BDBDBD"}}>
                                    <IconButton onClick={() => cartItem.number > 1 && handleIncrease(cartItem.productId)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <span style={{fontSize:"1.2rem"}}>{cartItem.number}</span>
                                    <IconButton onClick={()=>{handleDecrease(cartItem.productId)}}>
                                        <AddIcon />
                                    </IconButton>
                                </div>
                            </div>                           
                        </div>
                        <p style={{margin:"0 0 0 auto", display:"block", width:"80px",}}><u>Remove</u></p>
                    </div>
                )
            })}
        </div>
    )
}
export default CartContent;