import axios from 'axios';

// Determine the base URL based on the environment
// const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const BASE_URL = 'http://localhost:5000';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // Example timeout
});

export default axiosInstance;
