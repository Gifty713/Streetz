import {v2 as cloudinary} from "cloudinary";
cloudinary.config({
    cloud_name:"dnnmxbdxx",
    api_key: "117243553764536",
    api_secret: "pOrzWY92HABKs6ByF71DJLjOhC0"
})

// const upholdTest =async()=>{
//     try {
//         const result = await cloudinary.uploader.upload("../middleware/jacket.jpg");
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

export default cloudinary;