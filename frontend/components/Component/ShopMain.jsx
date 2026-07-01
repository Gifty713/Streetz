import Nav from "./Nav";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
const ShopMain=({categories,cat, setCat, setShowNav, showNav})=>{
    // To be able to navigate back to Category without route /shop/category
    const {state} = useLocation() || "";
    const navigate = useNavigate();
    useEffect(() => {
        if (state){
            const categoryy = state.fromDesc.category;
            setCat(categoryy);
            setShowNav(true);    
            console.log(categoryy);
        }
        navigate(location.pathname, { replace: true, state: null });
    }, [state, navigate]);
    return(
        <div>
            <div className="home-clothes-displayed-shop">
                {categories.map((category, id)=>{
                    return(
                        <div className="home-clothes-img-shop" key={id} onClick={()=>{
                            setCat(category.names);
                            setShowNav(true);
                        }} >
                            <img className="shop-main-img" src={category.images} alt="image of category" />
                            <p className="shop-main-p">{category.names}</p>
                        </div>                        
                    )
                })}
            </div>
        </div>
    )
}
export default ShopMain;