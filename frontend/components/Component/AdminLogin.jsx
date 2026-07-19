import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const AdminLogin = ({auth, setAuth}) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const DEMO_EMAIL = "admin@streetz.com";
  const DEMO_PASSWORD = "streetz123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      sessionStorage.setItem("isAdmin", "true");
      setAuth(true);
      navigate("/admin/dashboard");
      console.log("changed to true");
    } else {
      setError("Invalid email or password.");
    }
  };
  
  return (
    <div>
      <Nav/>
      <div style={{minHeight:"80vh", display:"flex", justifyContent:"center", alignItems:"center", background:"#f4f4f4", padding:"20px"}}>

        <div style={{width:"100%", maxWidth:"420px", background:"#fff", padding:"40px 30px", borderRadius:"18px", boxShadow:"0 10px 30px rgba(0,0,0,0.08)"}}>
          
          {/* Heading */}
          <div style={{textAlign:"center", marginBottom:"35px"}}>
            <p style={{fontSize:"0.9rem", letterSpacing:"3px", color:"#777", marginBottom:"10px"}}>
              ADMIN PANEL
            </p>

            <h2 style={{margin:"0", fontSize:"2rem", fontWeight:"800"}}>
              Welcome Back
            </h2>

            <p style={{color:"#666", marginTop:"10px", lineHeight:"1.6"}}>
              Login to manage products, orders, and customers.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div style={{marginBottom:"20px"}}>
              <label style={{display:"block", marginBottom:"8px", fontWeight:"600"}}>
                Email
              </label>

              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{width:"100%", padding:"14px", border:"1px solid #ddd", borderRadius:"10px", outline:"none", fontSize:"1rem", boxSizing:"border-box"}}
              />
            </div>

            {/* Password */}
            <div style={{marginBottom:"25px"}}>
              <label style={{display:"block", marginBottom:"8px", fontWeight:"600"}}>
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                style={{width:"100%", padding:"14px", border:"1px solid #ddd", borderRadius:"10px", outline:"none", fontSize:"1rem", boxSizing:"border-box"}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <p
                onClick={() => setShowPassword(!showPassword)}
                style={{marginTop:"10px", color:"#555", cursor:"pointer", fontSize:"0.9rem", width:"fit-content"}}
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </p>
            </div>

            {error && (
              <p
                style={{
                  color: "red",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              style={{width:"100%", padding:"14px", border:"none", borderRadius:"10px", background:"#111", color:"#fff", fontSize:"1rem", fontWeight:"700", cursor:"pointer"}}
            >
              Login
            </button>

          </form>
            <p style={{color:"#666", marginTop:"10px", lineHeight:"1.6"}}>
              Demo Admin Email: admin@streetz.com <br />
              Demo Admin Password: streetz123
            </p>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;
