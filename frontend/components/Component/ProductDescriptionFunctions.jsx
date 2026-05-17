// fetching function
const fetchOne=async()=>{
    try {
        const respond = await fetch(`http://localhost:4000/api/v1/admin/getoneproduct/${id}`);
        const data = await respond.json();
        await setOneProduct(data);             
    } catch (error) {
        console.log("Error in fetching content.");
    }
}
// Initial push to cart function
const handleInitialCart=(id)=>{
    const cartArray = JSON.parse(localStorage.getItem("productIds")) || [];
    cartArray.push({"productId":id, "number": quantity});
    localStorage.setItem("productIds", JSON.stringify(cartArray));
    setHandled(true);
    console.log(cartArray);
}
// subsequent adding
const handleSubsequentAdd=(id)=>{
    const cartArray = JSON.parse(localStorage.getItem("productIds"));
    const index = cartArray.findIndex(oneObj => oneObj.productId == id );
    console.log(cartArray);
    console.log(index)
    cartArray[index].number += 1;
    localStorage.setItem("productIds", JSON.stringify(cartArray));

}
// susequent removing
const handleSubsequentRemove = (id)=>{
    const cartArray = JSON.parse(localStorage.getItem("productIds"));
    const index = cartArray.findIndex(oneObj => oneObj.productId == id );
    cartArray[index].number -= 1;
    localStorage.setItem("productIds", JSON.stringify(cartArray));   
    console.log(cartArray);
}

export {fetchOne, handleInitialCart, handleSubsequentRemove, handleSubsequentAdd};