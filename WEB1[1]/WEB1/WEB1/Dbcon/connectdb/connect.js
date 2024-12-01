const mongoose = require("mongoose");

const con_string = "mongodb+srv://arpitabansal321:Jk1premSVmKr6mqC@firstsmile.amnra.mongodb.net/<Firstsmile>?retryWrites=true&w=majority&appName=FirstSmile";

const dbconnect = async () => {
    try {
        await mongoose.connect(con_string, {
            tlsAllowInvalidCertificates: true,
            connectTimeoutMS: 60000, // 60 seconds
             // Ignore SSL validation issues <%- include('header') %> <!-- Include the header partial -->
             // Ignore SSL validation issues
        });
        console.log("Database is connected");
    } catch (err) {
        console.error("Error connecting to the database:", err.message);
    }
};

module.exports = dbconnect;







