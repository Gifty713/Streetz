import Avatar from "@mui/material/Avatar"
import StarIcon from "@mui/icons-material/Star";
const Reviews = ()=>{
    const reviews = [
        {name:"Ruth Adebayo",review:"I’ve ordered from a lot of streetwear brands online, but the quality here genuinely surprised me. Shipping was fast too, which made the whole experience even better."},
        {name:"John Chinedu",review:"The oversized hoodie I bought instantly became one of my favorite pieces. It’s comfortable without feeling too heavy, and the attention to detail is crazy. "},
        {name:"Ahmed Bello",review:"What I like most is that the clothes actually match the photos on the site. The colors, fit, and overall vibe were exactly what I expected. "},
        {name:"Praise Effiong",review:"I was honestly skeptical at first, but after my first order I understood the hype. The packaging was clean, delivery was smooth, and the quality exceeded my expectations."}
    ]
    return(
     <div style={{padding: "10px 20px 25px 20px", backgroundColor: "#f8f8f8"}}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <p style={{fontSize: "0.9rem",fontWeight: "700",letterSpacing: "3px",textTransform: "uppercase",color: "#000",marginBottom: "10px",}}>
          Testimonials
        </p>

        <p style={{color: "#555",maxWidth: "600px",margin: "15px auto 0",lineHeight: "1.7",fontSize: "1rem",}}>
          Real feedback from people rocking our streetwear every day.
        </p>
      </div>

      <div style={{display: "grid",gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",gap: "25px",}}>
        {reviews.map((eachReview, id) => {
          return (
            <div
              key={id}
              style={{background: "#fff",padding: "25px",borderRadius: "18px",boxShadow: "0 8px 25px rgba(0,0,0,0.08)",transition: "0.3s ease",cursor: "pointer",}}
            >
              <div style={{display: "flex",marginBottom: "15px",color: "#ffb400",}}
              >
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} sx={{ fontSize: "20px" }} />
                ))}
              </div>
              <p style={{color: "#444",lineHeight: "1.8",fontSize: "0.98rem",marginBottom: "25px",}}>
                "{eachReview.review}"
              </p>
              <div style={{display: "flex",alignItems: "center",}}>
                <Avatar sx={{backgroundColor: "#111",width: 45,height: 45,fontWeight: "700",}}>
                  {eachReview.name.slice(0, 1)}
                </Avatar>

                <div style={{ marginLeft: "12px" }}>
                  <p style={{margin: 0,fontWeight: "700",fontSize: "1rem",}}>{eachReview.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Reviews;