import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
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
        cartDisplayed[index].number -= 1;
        localStorage.setItem("productIds", JSON.stringify(cartDisplayed));   
        setWatcher(cartDisplayed[index].number);
    }
    // remove from cart
    const removeProduct=(id)=>{
        const index = cartDisplayed.findIndex(oneObj => oneObj.productId == id );
        cartDisplayed.splice(index, 1);
        localStorage.setItem("productIds", JSON.stringify(cartDisplayed));   
        // just to make the page refresh 
        setWatcher(id);   
    }

    // get subtotal 
    const [total, setTotal] = useState(0);
    const getSubtotal =()=>{
        let total = 0;
        cartDisplayed.map((item)=>{
            const itemSum = item.number * item.price;
            total += itemSum;
        })  
        setTotal(total);
    }
    // refreshes on change of watcher
    useEffect(()=>{getSubtotal()}, [watcher]);

    // check out loader states functions
    const [open, setOpen] = useState(false);
    const handleClose = () => {setOpen(false)};
    const handleOpen = () => {setOpen(true)};
    
    return(
        <div className="cart-cont">
            {cartDisplayed.map((cartItem)=>{
                return(
                    <div key={cartItem.productId} className="cart-item-cont" >
                        <div className="cart-item" >
                            <div style={{width:"40%"}}>
                                <img src={cartItem.image} width="120px" height="120px" alt="Image of product" />
                            </div>
                            <div style={{width:"50%"}} >
                                <p style={{fontWeight:"500", fontSize:"1.1rem", margin:"0 0 0px 0"}}>{cartItem.name}</p>
                                <p style={{margin:"0 0 0px 0", color:"#808080", fontSize:"1rem"}}>Size: {cartItem.size}</p>
                                <p style={{margin:"0 0 0 0", fontSize:"1.2rem", }}>₦{cartItem.price.toLocaleString("en-US")}.00</p>
                                <div style={{ display: "flex", alignItems:"center", justifyContent:"space-between",width:"130px", border:"1px solid #BDBDBD"}}>
                                    <IconButton onClick={() => cartItem.number > 1 && handleDecrease(cartItem.productId)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <span style={{fontSize:"1.2rem"}}>{cartItem.number}</span>
                                    <IconButton onClick={()=>{handleIncrease(cartItem.productId)}}>
                                        <AddIcon />
                                    </IconButton>
                                </div>
                            </div>                           
                        </div>
                        <p className="remove-btn-cart" style={{margin:"0 0 0 auto", display:"block", width:"80px", cursor:"pointer"}} onClick={()=>{removeProduct(cartItem.productId)}}><u>Remove</u></p>
                    </div>
                )
            })}
            <div style={{height:"130px"}}>
                <div className="cart-summary">
                    <div style={{display:"flex", justifyContent:"space-between", margin:"0px", alignItems:"last baseline"}}>
                        <p style={{fontSize:"1.1rem", fontWeight:"600"}}>SubTotal</p>
                        <p style={{fontSize:"1.2rem", fontWeight:"500"}}>₦{total.toLocaleString("en-US")}.00</p>
                    </div>
                    <div>
                        <div className="filter-bar" style={{color:"#fff", backgroundColor:"#000", width:"100%", height:"50px", textAlign:"center", padding:"7px", marginBottom:"10px", borderRadius:"6px"}}  onClick={handleOpen}>
                            <p style={{margin:"5px 0 0 0"}}>Check out</p>
                        </div>                   
                        <Backdrop
                            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                            open={open}
                            onClick={handleClose}
                        >
                            <Alert severity="info">Check Out not available now.</Alert>
                        </Backdrop>    
                        </div>
                </div>                
            </div>
        </div>
    )
}
export default CartContent;