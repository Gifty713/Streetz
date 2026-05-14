export const fetchProducts = async(setStates)=>{
    try {
        const respond = await fetch("http://localhost:4000/api/v1/admin/getproducts")
        const data = await respond.json();
        setStates(data.products);
    } catch (err) {
        console.error("Error in fetching products", err);
    }     
}