const API_key="39eabd84f8e615fd7c52deb3c6a8280d"

const requests={
    fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&with_network=213`,
    fetchTreanding:`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_key}&language=en-US`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComadyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=99`,

}
export default requests;