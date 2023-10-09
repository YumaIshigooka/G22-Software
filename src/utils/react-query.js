// utils/react-query.js
import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3/";

export const fetchMovies = async () => {
    try {
        const response = await axios.get(
            // Update the API_KEY_TMDB with your own API key
            `${API_BASE_URL}movie/popular?api_key=API_KEY_TMDB&language=en-US&page=1`
        );
        return response.data.results;
    } catch (error) {
        throw error;
    }
};
