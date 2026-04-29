import Home from "../components/MainComponent/Home";
import Cart from "../components/MainComponent/Cart";
import Shop from "../components/MainComponent/Shop";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Breif2 from "../components/Component/BottomNav";
import "./App.css";
const App=()=>{
    return(
        <BrowserRouter>
                <Breif2/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                </Routes>
        </BrowserRouter>
    )
}
export default App;