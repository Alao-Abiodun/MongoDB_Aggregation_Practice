import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongo_aggregation');
        console.log('Connected!');
    } catch (error) {
        console.log(error);
    }
} 

export default connectDB