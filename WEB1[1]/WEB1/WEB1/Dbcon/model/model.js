const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Product Schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: [String], required: true },
    gender: { type: String, enum: ['Unisex', 'Boys', 'Girls'], required: true },
    stock: { type: Number, default: 0 },
    image: { type: String },
    brand: { type: String, required: true }
}, { timestamps: true });

// User Schema with Password Hashing
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    address: { type: String },
    phone: { type: String }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Order Schema
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true }
        }
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
    shippingAddress: { type: String, required: true },
    paymentMethod: { type: String, default: 'COD' },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);
const Order = mongoose.model('Order', orderSchema);

module.exports = { Product, User, Order };



