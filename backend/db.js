// db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
async function connectDB() {
    dotenv.config({ path: '.env.local' });
    const uri = process.env.MONGODB_URI;
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: {
                version: '1',
                strict: true,
                deprecationErrors: true,
            },
        });
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
