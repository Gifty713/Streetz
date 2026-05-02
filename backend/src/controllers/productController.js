import { Product } from "../models/productModel";
// Function to Create product
const addProduct = async(req, res)=>{
    try {
        const {name, description, price, imageURL} = req.body;
        // verification
        if(!name || !description || !price || !imageURL)return res.status(400).json({message:"All fields are required, thank you."});
        // add product to mongodb
        const addProduct = Product.create({name, description, price, imageURL});
        

    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}

// Function to get all products available
const getProduct =async(req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

// Function to get a particular product based on category/ID

// Function to delete a product from database

// Function to update the product