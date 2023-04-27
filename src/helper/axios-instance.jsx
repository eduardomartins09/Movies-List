import axios from "axios";

const moviesInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
})

export default moviesInstance;