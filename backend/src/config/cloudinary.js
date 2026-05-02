import {v2 as cloudinary} from "cloudinary";
cloudinary.config({
    cloud_name:"dnnmxbdxx",
    api_key: process.env.api_key_cloudinary,
    api_secret: process.env.api_secret_cloudinary
})

const upholdTest =async()=>{
    try {
        const result = await cloudinary.uploader.upload("../middleware/jacket.jpg");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export default cloudinary;