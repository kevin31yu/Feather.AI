import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose'; // Import mongoose
import tripRoutes from './routes/tripRoutes.js';
import userRoutes from './routes/userRoutes.js'; // Import user routes
import cors from 'cors';

// Load environment variables from .env file
config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cors()); // Allow all origins

// Use routes
app.use('/api', tripRoutes); // All routes in tripRoutes will be prefixed with /api
app.use('/api/users', userRoutes); // All routes in userRoutes will be prefixed with /api/users

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
