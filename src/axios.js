import axios from "axios";

// Base URL to make request to the movie Database

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance