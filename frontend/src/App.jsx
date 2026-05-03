import Home from "../components/MainRoutes/Home";
import Cart from "../components/MainRoutes/Cart";
import Shop from "../components/MainRoutes/Shop";
import AdminHome from "../components/MainRoutes/AdminHome";
import AdminOrders from "../components/MainRoutes/AdminOrders";
import AdminProducts from "../components/MainRoutes/AdminProducts";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import {BottomNavAdmin, BottomNavUser} from "../components/UIComponents/BottomNav";
import "./App.css";
import { useState } from "react";
const App=()=>{
    // state to observe change from user to admin or vice versa
    const [change, setChange] = useState();

    // determine whether in admin page 
    const location = useLocation();
    const isAdmin = location.pathname.startsWith("/admin");
    return(
        <>
            {!isAdmin? <BottomNavUser/>: <BottomNavAdmin/> }
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/admin/dashboard" element={<AdminHome/>}></Route>
                <Route path="/admin/orders" element={<AdminOrders/>}></Route>
                <Route path="/admin/products" element={<AdminProducts/>}></Route>
            </Routes>
        </>
    )
}
export default App;