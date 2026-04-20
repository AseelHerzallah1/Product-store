import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // this will add createdAt and updatedAt fields to the schema
});

// this says to mongoose that we want to create a model called "Product" using the productSchema 
// and each products has the fiels name, price and image and each field has a type and is required
export const Product = mongoose.model("Product", productSchema);


export default Product;