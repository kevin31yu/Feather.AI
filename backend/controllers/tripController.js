import OpenAI from 'openai';
import { config } from 'dotenv';

config(); // Load environment variables

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const getTripPlan = async (req, res) => {
    try {
        let { destination, days } = req.body; // Extract destination and days from request body

        if (!destination) destination = "Tokyo";
        if (!days) days = "3";

        // Convert days to a number and validate
        const daysNumber = parseInt(days, 10);
        if (isNaN(daysNumber) || daysNumber <= 0) {
            return res.status(400).json({ error: 'Days must be a positive number' });
        }

        // Construct prompt for OpenAI API
        const prompt = `Plan a ${days}-day trip to ${destination}. Provide the daily itinerary in the following format and include only one longitude and latitude of the destination at the beginning:\n\n` +
            `1. Longitude: [longitude], Latitude: [latitude]\n\n` +
            `Day 1:\n` +
            `Morning:\n` +
            `- Describe a morning activity in detail.\n` +
            `- Include any specific places to visit or things to do.\n` +
            `Afternoon:\n` +
            `- Describe an afternoon activity in detail.\n` +
            `- Include any specific places to visit or things to do.\n` +
            `Evening:\n` +
            `- Describe an evening activity in detail.\n` +
            `- Include any specific places to visit or things to do.\n\n` +
            `Etc... \n` +
            `Use this format for each day of the trip. Each day plan must have exactly 10 components, where: 
               Day label, Morning label, 1 paragraph for detailed Morning activities, Afternoon label, 
               1 paragraph for detailed Afternoon activities, Evening label, and 1 paragraph for detailed 
               Evening activities. Don't use - for all activities.`;

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'You are a trip advisor. Provide a detailed itinerary in a structured format.' },
                { role: 'user', content: prompt }
            ],
            model: 'gpt-3.5-turbo', // model version
        });

        // Process the response to create an array
        const responseText = completion.choices[0].message.content;

        // Split the response into lines
        const lines = responseText.split('\n');

        // Extract coordinates from the first line
        const [coordinatesLine, ...tripPlanLines] = lines;
        const coordinateMatch = coordinatesLine.match(/Longitude:\s*([-\d.]+),\s*Latitude:\s*([-\d.]+)/);
        const coordinates = coordinateMatch ? {
            longitude: parseFloat(coordinateMatch[1]),
            latitude: parseFloat(coordinateMatch[2]),
        } : null;

        // Filter out empty lines and skip the first line (coordinates)
        const plan = tripPlanLines.filter(line => line.trim() !== '');

        // Send response
        res.json({ tripPlan: plan, coordinates: coordinates });
    } catch (error) {
        console.error('Error generating trip plan:', error);
        res.status(500).json({ error: 'Failed to generate trip plan' });
    }
};
