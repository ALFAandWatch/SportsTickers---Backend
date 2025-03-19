import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './config/data-source';
import linksRouter from './routes/linksRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/links', linksRouter);

// Start server after DB connection
AppDataSource.initialize().then(() => {
   app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
