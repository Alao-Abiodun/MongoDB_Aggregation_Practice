import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { MONGODB_URI } = process.env;

const connectDB = async () => {
    try {
        mongoose.connect(MONGODB_URI);
        console.log('Connected to the Database!');
    } catch (error) {
        console.log(error);
    }
} 

export default connectDB