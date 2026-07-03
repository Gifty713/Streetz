import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})
cloudinary.config({
    cloud_name:"dnnmxbdxx",
    api_key: process.env.api_key_cloudinary,
    api_secret: process.env.api_secret_cloudinary
})

export default cloudinary;