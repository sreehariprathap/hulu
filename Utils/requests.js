const API_KEY = process.env.API_KEY

export default {
  getTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  getTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  getActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  getAdventureMovies: {
    title: "Adventure",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  },
  getComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  getHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  getRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  getDocumentaries: {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  },
  getDramaMovies: {
    title: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  },
  getMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  getSciFiMovies: {
    title: "SciFi",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  },
  getThrillerMovies: {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
  },
  getAnimationMovies: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  },
  getTV: {
    title: "TV",
    url: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10770`,
  },
}
