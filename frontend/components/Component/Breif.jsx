import "./ComponentStyle.css"
import Footer from "./Footer";
const Breif =()=>{
    const displayedClothes=["/jacket.jpg", "/pink_shirt.jpg", "/rema.jpg", "/singlet.jpg"];
    return(
        <div style={{position:"relative", overflowX:"hidden", width:"100%"}}>
            <div className="filter-bar" style={{color:"#fff", backgroundColor:"#000", width:"100%", textAlign:"center", padding:"7px", marginTop:"10px"}}><p>FILTER</p></div>
            <div className="home-clothes-displayed">
                {displayedClothes.map((cloth, key)=>{
                    return(
                        <div className="home-clothes-img" key={key}>
                            <img src={cloth} alt="Clothes" style={{width:"100%", height:"150px", objectFit: "cover" }} />
                            {/* cart icon*/}
                            <p style={{margin:"0px 0px 0px 0px"}}>Name </p>
                            <p style={{margin:"3px 0px 0px 0px"}}>Description of clothe</p>
                            <p style={{margin:"3px 0px 0px 0px"}}>Price of cloth</p>
                        </div>
                    )
                })}   
            </div>
            <div className="filter-bar" style={{color:"#fff", backgroundColor:"#000", width:"100%", textAlign:"center", padding:"7px", marginTop:"10px"}}><p>SEE MORE</p></div>
            <Footer/>
            <div className="nav-tab-below">
                <p>Home</p>
                <p>Search</p>
                <p>Shop</p>
                <p>Cart</p>
            </div>
        </div>
    )
}
export default Breif;