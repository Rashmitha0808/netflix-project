//store in (API key)
const API_KEY = "47ae45b316a49c696d64ff975af42329";

const requests = {
  fetchTrending: `/ott/show?filter={"type" : "web series"}&page=1&limit=20`,
  fetchNetflixOriginals: `/ott/show?filter={"type" : "web series"}&page=2&limit=20`,
  fetchTopRated: `/ott/show?filter={"type" : "web series"}&page=3&limit=20`,
  fetchActionMovies: `/ott/show?filter={"type" : "movie"}&page=4&limit=20`,
  fetchComedyMovies: `/ott/show?filter={"type" : "web series"}&page=5&limit=20`,
  fetchHorrorMovies: `/ott/show?filter={"type" : "web series"}&page=6&limit=20`,
  fetchRomanceMovies: `/ott/show?filter={"type" : "web series"}&page=7&limit=20`,
  fetchDocumentaries: `/ott/show?filter={"type" : "documentary"}&page=8&limit=20`,
  login: `/user/login`,
  signup: `user/signup`,
};

// movie, web series, tv show, video song, documentary, trailer
//genere
export default requests;
// https://api.themoviedb.org/3/trending/all/week?api_key=47ae45b316a49c696d64ff975af42329&language=en-US
