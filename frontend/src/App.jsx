import Home from "../components/MainRoutes/Home";
import Cart from "../components/MainRoutes/Cart";
import Shop from "../components/MainRoutes/Shop";
import AdminHome from "../components/MainRoutes/AdminHome";
import AdminOrders from "../components/MainRoutes/AdminOrders";
import AdminProducts from "../components/MainRoutes/AdminProducts";
import NotFound from "../components/Component/NotFound";
import ProductDescription from "../components/Component/ProductDescription";
import ShopMain from "../components/Component/ShopMain";
import AdminLogin from "../components/Component/AdminLogin";
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
    const screenWidth = window.innerWidth

    return(
        <>
            {/* {screenWidth <= 850 && (
                <div>
                    {!isAdmin ? <BottomNavUser /> : <BottomNavAdmin />}
                </div>
            )}
            <div className="app-cont">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                    <Route path="/admin/dashboard" element={<AdminHome/>}></Route>
                    <Route path="/admin/orders" element={<AdminOrders/>}></Route>
                    <Route path="/admin/products" element={<AdminProducts/>}></Route>
                    <Route path="/products/:id" element={<ProductDescription/>}></Route>
                    <Route path="/admin/login" element={<AdminLogin/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </div> */}
                <h1 style={{ padding: "2rem" }}>
                React is working!
                </h1>
        </>
    )
}
export default App;