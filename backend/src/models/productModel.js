import mongoose, {Schema} from "mongoose";

const ProductSchema = new Schema({
    
    name:{
        type: String,
        minLength: 5,
        maxLength: 15,
        unique: true,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        minLength: 5,
        maxLength: 15,
        required: true,    
        trim: true   
    },
    price:{
        type: Number,
        minLength: 1,
        maxLength: 7,
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