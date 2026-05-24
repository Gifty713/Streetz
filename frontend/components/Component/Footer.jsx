import Reviews from "./Reviews";
const Footer=()=>{
    return(
        <div style={{fontSize:"1.5rem", padding:"10px 0px", width:"100%"}}>
            <Reviews/>
            <footer style={{background:"#111", color:"#fff", padding:"10px 20px 20px 20px"}}>
                
                <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"40px", marginBottom:"40px"}}>

                    <div>
                        <h2 style={{marginBottom:"15px", fontSize:"1.8rem", letterSpacing:"2px"}}>Streetz</h2>
                        <p style={{color:"#bbb", lineHeight:"1.8", fontSize:"0.95rem"}}>Modern streetwear built for confidence, comfort, and everyday style.</p>
                    </div>

                    <div>
                        <div style={{display:"flex", flexDirection:"column", gap:"10px", color:"#bbb", fontSize:"0.9rem"}}>
                            <p style={{margin:"0", cursor:"pointer"}}>About Us</p>
                            <p style={{margin:"0", cursor:"pointer"}}>Contact</p>
                            <p style={{margin:"0", cursor:"pointer"}}>Privacy Policy</p>
                            <p style={{margin:"0", cursor:"pointer"}}>Terms & Conditions</p>
                        </div>
                    </div>

                    <div>
                        <h3 style={{marginBottom:"15px", fontSize:"1.1rem"}}>Stay Updated</h3>

                        <p style={{color:"#bbb", lineHeight:"1.7", fontSize:"0.95rem", marginBottom:"15px"}}>
                            Get updates on new drops and exclusive offers.
                        </p>

                        <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
                            
                            <input
                            type="email"
                            placeholder="Enter your email"
                            style={{flex:"1", minWidth:"180px", padding:"12px", border:"none", borderRadius:"8px", outline:"none"}}
                            />

                            <button style={{padding:"12px 18px", border:"none", borderRadius:"8px", background:"#fff", color:"#111", fontWeight:"700", cursor:"pointer"}}>
                            Subscribe
                            </button>

                        </div>
                    </div>
                </div>

                <div style={{borderTop:"1px solid #333", paddingTop:"20px", textAlign:"center", color:"#888", fontSize:"0.9rem"}}>
                    © 2026 STRRETZ. All rights reserved.
                </div>

                </footer>
        </div>
    )
}
export default Footer;