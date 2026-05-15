import { Product } from "../models/productModel.js";
import cloudinary from "../config/cloudinary.js";
// Function to Create product
const addProduct = async(req, res)=>{
    try {
        // upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        const {name, description, price, category ,image} = req.body;

        // verification
        if(!name || !description || !price || !category)return res.status(400).json({message:"All fields are required, thank you."});
        
        // add product to mongodb
        const product  = await Product.create({name, description, price,category,image:result.secure_url});
        // return respond
        res.status(200).json({message:"Uploaded successfully", product:{
            id: product._id,
            name: product.name,
            description: product.description,
            category:product.category
        }})

    } catch (err) {
        res.status(500).json({message:"Internal Server Error", error: err.message});
    }
}

// Function to get all products available
const getProduct =async(req, res)=>{
    try {
        const products = await Product.find();
        res.status(200).json({message:"Products fetced successfully", products});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

// Function to get a particular product based on category/ID
const particularProduct=async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product)return res.status(404).json({message:"Product not found."});
        res.status(200).json({message:"Product successfully gotten!", product})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error", error})
    }
}

// Function to delete a product from database
const deleteProducts = async(req, res)=>{
    try {
        const deletedPost = await Product.findByIdAndDelete(req.params.id);
        if(!deletedPost)return res.status(404).json({message:"Product not found."});
        res.status(200).json({message:"Product deleted successfully", deletedPost});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error", error});
    }
}
// Function to update the product
export {addProduct, getProduct, deleteProducts, particularProduct};