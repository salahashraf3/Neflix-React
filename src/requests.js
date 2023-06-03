// const apiKey = "9acf0a6d2389dcf15120b2ab4d37cbed";

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=4e44d9029b1270a757cddc766a1bcb63&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`,
    fetchPopular: `/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`,
    fetchNowPlaying: `/movie/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`,

    fetchActionMovies: `/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=10749`,
    fetchDocumentries: `/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=99`,
}

export default requests