import Home from "../components/MainComponent/Home";
import Cart from "../components/MainComponent/Cart";
import Shop from "../components/MainComponent/Shop";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
const App=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;