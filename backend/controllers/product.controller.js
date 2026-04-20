import mongoose from "mongoose";
import Product from "../models/Product.js";

export const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({success: false, message: "Server error", error: error.message});
    }
}

export const createProduct = async (req, res) => {
    // this is the product that we want to add to the database (user will send this data)
    const product = req.body; 

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please provide name, price and image for the product"});
    }

    // here we will add the product to the database using the Product model
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, message: "Product added successfully", data: newProduct}); // something created
    } catch (error) {
        console.error("Error adding product:", error.message);
        res.status(500).json({success: false, message: "Error adding product", error: error.message});
    }

}

export const updateProduct =  async (req, res) => {
    const {id} = req.params;
    const Data = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({success: false, message: "Invalid product ID"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, Data, { new: true });
        res.status(200).json({success: true, message: "Product updated successfully", data: updatedProduct});
    } catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({success: false, message: "Error updating product", error: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({success: false, message: "Invalid product ID"});
    }
    console.log("id to delete:", id); 
    try {

        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
} catch (error) {
        console.error("Error deleting product:", error.message);
        res.status(500).json({success: false, message: "Error deleting product", error: error.message});
    }
}