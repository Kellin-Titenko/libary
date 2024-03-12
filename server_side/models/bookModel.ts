import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    Title: String,
    Author: String,
    Genre: String,
    Pages: Number,
    Copies: Number,
    CreatedAt: Date
});

export const Book = mongoose.model('Books', bookSchema);
