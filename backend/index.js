import express from 'express';
import { config } from 'dotenv';
import tripRoutes from './routes/tripRoutes.js';
import cors from 'cors';

// Load environment variables from .env file
config();

const app = express();
const port = process.env.PORT || "http://wanderplanai.us-east-2.elasticbeanstalk.com" || 5000;

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cors()); // Allow all origins

// Use routes
app.use('/api', tripRoutes); // All routes in tripRoutes will be prefixed with /api

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
