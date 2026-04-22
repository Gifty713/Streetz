import "./ComponentStyle.css"
const Breif =()=>{
    const displayedClothes=["/jacket.jpg", "/pink_shirt.jpg", "/rema.jpg", "/singlet.jpg"];
    return(
        <div>
            <div className="filter-bar" style={{color:"#fff", backgroundColor:"#000", width:"100%", textAlign:"center", padding:"7px", marginTop:"10px"}}><p>FILTER</p></div>
            <div className="home-clothes-displayed">
                {displayedClothes.map((cloth, key)=>{
                    return(
                        <div className="home-clothes-img" key={key}>
                            <img src={cloth} alt="Clothes" style={{width:"100px", height:"100px"}} />
                            {/* cart icon*/}
                            <p>Name description of clothe</p>
                            <p>Price of cloth</p>
                        </div>
                    )
                })}   
            </div>
            <div className="filter-bar" style={{color:"#fff", backgroundColor:"#000", width:"100%", textAlign:"center", padding:"7px", marginTop:"10px"}}><p>SEE MORE</p></div>

        </div>
    )
}
export default Breif;