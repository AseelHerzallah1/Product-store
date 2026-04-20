// "type": "module", for import export syntax
import express from 'express'; 
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // this will allow us to use the port defined in the .env file or default to 5000 if not defined

const __dirname = path.resolve(); // this will give us the absolute path of the current directory
app.use(express.json()); // this will allow us to parse JSON data from the request body

app.use("/api/products", productRoutes); // this will allow us to use the routes defined in product.route.js for any request that starts with /api/products

if(process.env.NODE_ENV === "production") {
    // this will serve the static files from the build folder of the frontend
    app.use(express.static(path.join(__dirname, "frontend/dist")));

    app.get("/*path", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

connectDB();

app.listen(PORT, () => {
    console.log("server started at http://localhost:" + PORT);
});

