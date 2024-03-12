import express from 'express';
import { getAllBooks } from '../controllers/bookController';

const router = express.Router();

router.get('/books', getAllBooks);

export default router;
