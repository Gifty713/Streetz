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
     <div className="review-cont">
      <div className="review-header-cont" >
        <p className="testimonial-header">
          Testimonials
        </p>

        <p className="header-2">
          Real feedback from people rocking our streetwear every day.
        </p>
      </div>

      <div className="testimonials-cont">
        {reviews.map((eachReview, id) => {
          return (
            <div
              key={id}
              className="main-testimonial"
            >
              <div className="star-cont" >
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} sx={{ fontSize: "20px" }} />
                ))}
              </div>
              <p className="review">
                "{eachReview.review}"
              </p>
              <div className="avatar-cont">
                <Avatar className="avatar" sx={{backgroundColor: "#111",width: 45,height: 45,fontWeight: "700",}}>
                  {eachReview.name.slice(0, 1)}
                </Avatar>

                <div className="avatar-p">
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