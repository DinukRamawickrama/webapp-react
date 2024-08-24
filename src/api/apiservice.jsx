import axios from 'axios';

const API_URL = 'http://13.61.11.24';  // Replace with your actual backend URL
//const API_URL = 'https://localhost:7092';  // Replace with your local backend URL
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/Auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error("There was an error registering the user!", error);
        throw error;
    }
};

export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/Auth/login`, loginData);
        return response.data;
    } catch (error) {
        console.error("There was an error logging in!", error);
        throw error;
    }
};
