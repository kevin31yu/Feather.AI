import express from 'express';
import { getTripPlan } from '../controllers/tripController.js';

const router = express.Router();

// Define the route for generating a trip plan
router.post('/trip', getTripPlan);

router.get('/', (req, res) => {
    res.send('WanderPlan server running');
});

export default router;
