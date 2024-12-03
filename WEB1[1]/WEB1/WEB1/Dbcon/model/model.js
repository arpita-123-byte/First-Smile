const mongoose = require("mongoose");

// MongoDB Connection Setup
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/yourdb", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if unable to connect
    }
};

// Product Schema
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        size: { type: [String] },
        gender: { type: String, enum: ['Unisex', 'Boys', 'Girls'], required: true },
        stock: { type: Number, default: 0 },
        image: { type: String },
        brand: { type: String, required: true },
    },
    { timestamps: true }
);

// User Schema
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        address: { type: String },
        phone: { type: String },
    },
    { timestamps: true }
);

// Order Schema
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    shippingAddress: { type: String, required: true },
    paymentMethod: { type: String, default: "COD" },
});

// Models
const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);
const Order = mongoose.model("Order", orderSchema);

// Dummy Data Creation
const saveDoc = async () => {
    // Create some products
    const products = [
        { name: "T-Shirt", price: 20, description: "Comfortable t-shirt", category: "Clothing", gender: "Unisex", stock: 50, brand: "BrandA" },
        { name: "Jeans", price: 40, description: "Classic blue jeans", category: "Clothing", gender: "Unisex", stock: 30, brand: "BrandB" },
    ];

    // Create some users
    const users = [
        { name: "John Doe", email: "john@example.com", password: "123456", address: "123 Main St", phone: "1234567890" },
        { name: "Jane Doe", email: "jane@example.com", password: "password", address: "456 Oak St", phone: "0987654321" },
    ];

    try {
        // Insert products and users first
        const insertedProducts = await Product.insertMany(products);
        const insertedUsers = await User.insertMany(users);

        // Get the inserted product and user ids for creating orders
        const user = insertedUsers[0]; // John Doe
        const product1 = insertedProducts[0]; // T-Shirt
        const product2 = insertedProducts[1]; // Jeans

        const orders = [
            {
                user: user._id,
                products: [
                    { product: product1._id, quantity: 2 },
                    { product: product2._id, quantity: 1 },
                ],
                totalAmount: 120,
                shippingAddress: "123 Main St, Springfield",
                paymentMethod: "Credit Card",
                status: "Shipped",
            },
            {
                user: insertedUsers[1]._id, // Jane Doe
                products: [{ product: product1._id, quantity: 3 }],
                totalAmount: 60,
                shippingAddress: "456 Elm St, Shelbyville",
                paymentMethod: "COD",
                status: "Pending",
            },
        ];

        // Insert orders with the valid ObjectIds
        await Order.insertMany(orders);
        console.log("Dummy data inserted successfully.");
    } catch (err) {
        console.error("Error inserting dummy data:", err);
    }
};

// Fetching Data
const getData = async () => {
    try {
        const products = await Product.find().select("name price description category").sort({ price: 1 });
        console.log("Products:", products);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
};

// Updating Data
const updateData = async (id, newData) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ObjectId");
        }
        const result = await Product.findByIdAndUpdate(id, { $set: newData }, { new: true });
        console.log("Updated Data:", result);
    } catch (err) {
        console.error("Error updating data:", err);
    }
};

// Deleting Data
const deleteData = async (id) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ObjectId");
        }
        const result = await Product.findByIdAndDelete(id);
        console.log("Delete Result:", result);
    } catch (err) {
        console.error("Error deleting data:", err);
    }
};

// Exporting Functions and Models
module.exports = {
    Product,
    User,
    Order,
    saveDoc,
    getData,
    updateData,
    deleteData,
    connectDB,
};
