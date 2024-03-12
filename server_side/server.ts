import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
const cors = require('cors');
import { connectToDatabase } from './config/database';
import bookRoutes from './routes/bookRoutes';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3008;

connectToDatabase();




app.use('/', bookRoutes);

app.get('/', (req, res) => {
    res.send('Hello, world');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
