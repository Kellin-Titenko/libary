import mongoose from 'mongoose';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as any;

export const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/books_and_users', options);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
