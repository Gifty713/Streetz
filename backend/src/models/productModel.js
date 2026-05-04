import mongoose, {Schema} from "mongoose";

const ProductSchema = new Schema({
    
    name:{
        type: String,
        minLength: 1,
        maxLength: 30,
        unique: true,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        maxLength: 120,
        required: true,    
        trim: true   
    },
    price:{
        type: Number,
        minLength: 1,
        maxLength: 10,
        required: true
    },
    image:{
        type: String,
        required: true
    } 
},
    {timestamps: true}
)

export const Product = mongoose.model("Product", ProductSchema);