import Button from "@mui/material/Button";
import AddProduct from "../Component/AddProduct";
import { useEffect, useState } from "react";
import { fetchProducts } from "../Component/FetchProducts";
import AdminDashBoardCards from "../Component/AdminDashBoardCards";
const AdminProducts = ()=>{
    // State to open add product pop up
    const [dataa, setDataa] = useState([]);
    useEffect(()=>{
        fetchProducts(setDataa);
    }, []);

    const deleteProduct =async(id)=>{
        try {
            console.log(id);
            const response = await fetch(`http://localhost:4000/api/v1/admin/deleteproduct/${id}`,{
                method: "DELETE"
            })
            const data = await response.json();
            console.log(data.products.name, " deleted successfully");       
            fetchProducts(setDataa);   
        } catch (err) {   
            console.error("Error has occured while fetching.", err);
        }
    }

    const [openPop, setOpenPop] = useState(false);
    return(
        <div>
           <p style={{fontSize:"2rem", marginTop:"10px", padding:"0px 20px", fontWeight:"600", marginBottom:"0"}}>Products</p>
            {openPop ? <svg viewBox="0 0 24 24" width={"50px"} height={"50px"} xmlns="http://www.w3.org/2000/svg" fill="#FF0000" style={{fontSize:"1.8rem", display:"block", width:"fit-content", color:"red", margin:"0 10% -35px auto"}} onClick={()=>{setOpenPop(false)}}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#FF0000" strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path> </g></svg>
                : <Button variant="contained" sx={{display:"block", backgroundColor:"black", marginTop:"0px",padding:"10px",cursor:"pointer", marginLeft:"auto", marginRight:"10%", borderRadius:"10px",zIndex:"0"}} onClick={()=>{setOpenPop(true)}}>Add Product</Button>}
            {openPop && <AddProduct childOpenPop = {openPop} childSetOpenPop={setOpenPop} refreshPage={fetchProducts(setDataa)}/> }
            {dataa.map((eachData)=>{
                return(
                    <div className="product-cont" style={{display:"flex",justifyContent:"space-between", width:"74%", alignItems:"last baseline", padding:"0px 0px 0px 30px"}} key={eachData._id}>
                        <div style={{width:"fit-content"}}>
                            <img src={eachData.image} width="100px"  height="100px" alt="clothes" />
                        </div>
                        <div style={{width:"55%", height:"150px"}}>
                            <p style={{fontSize:"1.25rem", marginBottom:"0px"}}>{eachData.name}</p>
                            <p style={{fontSize:"1.4rem", marginTop:"0px", fontWeight:"500", marginBottom:"0"}}>₦{eachData.price.toLocaleString("en-US")}</p>
                            <div style={{display:"flex", justifyContent:"space-between" ,width:"60%", margin:"0px 0 0 0"}}>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#0000FF" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:"#202020", padding:"7px", borderRadius:"8px"}}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z" stroke="#0000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <svg viewBox="-0.5 0 19 19" width="40px" height="40px" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#e20909" style={{backgroundColor:"#202020", padding:"7px", borderRadius:"8px"}} onClick={()=>{deleteProduct(eachData._id)}}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>icon/18/icon-delete</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="out" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage"> <path d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z" id="path" fill="#e20909" sketch:type="MSShapeGroup"> </path> </g> </g></svg>
                            </div>
                        </div>
                    </div>
                )
            })

            }

        </div>
    )
}
export default AdminProducts