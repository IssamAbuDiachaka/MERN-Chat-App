import dotenv from 'dotenv';    
dotenv.config();

import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected ✅: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error ❌: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
// This code connects to a MongoDB database using Mongoose. 
