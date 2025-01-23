import axios from 'axios';

export const getRestaurants = async () => {
    return axios.get(import.meta.env.VITE_API_BASE_URL + '/restaurants', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
        }
    })
        .then((response) => {
            localStorage.setItem('restaurants', JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            console.error('Failed to fetch restaurants:', error);
            throw error;
        });
};