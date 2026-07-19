import jwt from "jsonwebtoken";
const loginAdmin = async(req, res)=>{
    try {
        const{password, email} = req.body;

        if (!password || !email) return res.status(400).json({message:"fill all fields please"});
        
        // compare passwords
        if (password !== "streetz123") return res.status(401).json({message:"Invalid username or password."});
    
        // compare username
        if(email !== "admin@streetz.com") return res.status(401).json({message:"Invalid username or password."});
        
        if (!process.env.ACCESS_TOKEN_SECRET) throw new Error("ACCESS_TOKEN_SECRET is not configured");
        const admin = {email: "admin@streetz.com"};
        const accessToken = jwt.sign(admin, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"});
        
        res.cookie("admin_access_token", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 1000,
        });
        res.json({message: "Login successful"});
    } catch (err) {
        return res.status(500).json({message:"Internal Server Error", error:`Error:${err.message}`});
    }

}

const logoutAdmin = async(req, res)=>{
    try {
        res.clearCookie("admin_access_token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });
        res.status(200).json({message:"Logout Successful"});
    } catch (err) {
        return res.status(500).json({message:"Internal Server Error", error:`Error:${err.message}`});
    };
}

const getAdminSession = (req, res) => {
    res.status(200).json({user: req.user});
};

export {loginAdmin, logoutAdmin, getAdminSession};
