import axios from "axios";

const API_URL = 'http://localhost:3000/graph';

export const getGraphData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data;
    } catch (error) {
        console.error('Error in getting the data from the server: ', error);
        throw error;
    }
};