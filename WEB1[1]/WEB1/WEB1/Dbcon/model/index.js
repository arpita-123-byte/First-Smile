let express = require('express');
let app = express();

// Import database connection function and models
const dbconnect = require('../connectdb/connect'); // Ensure the path is correct
const { Product, User, Order } = require('./model'); // Ensure the path is correct

// Connect to the database
dbconnect();

// Middleware
app.use(express.json()); // Enable parsing of JSON bodies

// Sample route to check if server is working
app.get("/", (req, res) => {
    res.send("Welcome to Baby Clothes Store!");
});

// Route to add a new product
app.post("/add-product", async (req, res) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            size: req.body.size,
            gender: req.body.gender,
            stock: req.body.stock,
            image: req.body.image,
            brand: req.body.brand
        });
        
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Route to get all products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        console.log("Products retrieved from the database:");
        console.log(products); // Log the products in the console
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Function to add sample products
const addSampleProducts = async () => {
    const products = [
        {
            name: "Baby Clothing 1",
            description: "Comfortable and stylish",
            price: 19.99,
            rating: 4.5,
            image: "https://storage.googleapis.com/a1aa/image/1186TrVV7eSuJS8bdV2yEV8FXKgF51Zd2Miawii7rEQPLT3JA.jpg",
            link: "../D10",
            brand: "Brand A", // Add a brand
            gender: "Unisex", // Add gender
            category: "Clothing" // Add category
        },
        {
            name: "Baby Clothing 2",
            description: "Comfortable and stylish",
            price: 24.99,
            rating: 4.0,
            image: "https://storage.googleapis.com/a1aa/image/ZrmZ6NojXMI2LpoeJC5SbfVWSfOesBgfB1I4e6JP6VMKklp7E.jpg",
            link: "../D11",
            brand: "Brand B", // Add a brand
            gender: "Girls", // Add gender
            category: "Clothing" // Add category
        },
        {
            name: "Baby Clothing 3",
            description: "Comfortable and stylish",
            price: 29.99,
            rating: 4.5,
            image: "https://storage.googleapis.com/a1aa/image/my4jNS6C1jqJDR4TcG0knb5QnpuyHX3VpPxnQFr8jjQolp7E.jpg",
            link: "../D12",
            brand: "Brand C", // Add a brand
            gender: "Boys", // Add gender
            category: "Clothing" // Add category
        }
    ];

    addSampleProducts();
    try {
        for (let productData of products) {
            const product = new Product(productData);
            await product.save();
            console.log(`Product ${product.name} added to the database.`);
        }
    } catch (err) {
        console.error("Error adding products:", err.message);
    }
    };
    
    

// Start the server
app.listen(3000, () => {
    console.log("Server is connected and running on port 3000");
});

// Call the function to add products when the server starts



