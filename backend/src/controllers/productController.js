import { Product } from "../models/productModel.js";
import cloudinary from "../config/cloudinary.js";
// Function to Create product
const addProduct = async(req, res)=>{
    try {
        // upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        const {name, description, price, image} = req.body;

        // verification
        if(!name || !description || !price)return res.status(400).json({message:"All fields are required, thank you."});
        
        // add product to mongodb
        const product  = await Product.create({name, description, price, image:result.secure_url});
        // return respond
        res.status(200).json({message:"Uploaded successfully", product:{
            id: product._id,
            name: product.name,
            description: product.description
        }})

    } catch (err) {
        res.status(500).json({message:"Internal Server Error", error: err.message});
    }
}

// Function to get all products available
const getProduct =async(req, res)=>{
    try {
        console.log("hmmm")
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

// Function to get a particular product based on category/ID

// Function to delete a product from database

// Function to update the product
export {addProduct}