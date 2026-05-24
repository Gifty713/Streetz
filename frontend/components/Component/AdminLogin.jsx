import { useState } from "react";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center", background:"#f4f4f4", padding:"20px"}}>

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
        <form>

          {/* Email */}
          <div style={{marginBottom:"20px"}}>
            <label style={{display:"block", marginBottom:"8px", fontWeight:"600"}}>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter admin email"
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
            />

            <p
              onClick={() => setShowPassword(!showPassword)}
              style={{marginTop:"10px", color:"#555", cursor:"pointer", fontSize:"0.9rem", width:"fit-content"}}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            style={{width:"100%", padding:"14px", border:"none", borderRadius:"10px", background:"#111", color:"#fff", fontSize:"1rem", fontWeight:"700", cursor:"pointer"}}
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminLogin;