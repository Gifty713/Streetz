import Nav from "./Nav";
const ShopMain=({categories,cat, setCat, setShowNav, showNav})=>{
    return(
        <div>
            <div className="home-clothes-displayed">
                {categories.map((category, id)=>{
                    return(
                        <div className="home-clothes-img" key={id} onClick={()=>{
                            setCat(category.names);
                            setShowNav(true);
                        }} >
                            <img src={category.images} style={{width:"100%", height:"185px", objectFit: "cover", zIndex:"3", margin:"0 0", boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}} alt="image of category"/>
                            <p style={{fontSize:"1.5rem", margin:"0 0"}}>{category.names}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ShopMain;