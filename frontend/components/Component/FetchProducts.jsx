export const fetchProducts = async(setStates)=>{
    try {
        const respond = await fetch("/api/v1/admin/getproducts")
        const data = await respond.json();
        setStates(data.products);
    } catch (err) {
        console.error("Error in fetching products", err);
    }     
}