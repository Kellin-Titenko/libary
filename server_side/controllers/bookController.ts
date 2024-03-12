import { Request, Response } from 'express';
import { Book } from '../models/bookModel';

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        let query = {};
        if (req.query.genre) {
            query = { Genre: req.query.genre };
        }
        const books = await Book.find(query);
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
