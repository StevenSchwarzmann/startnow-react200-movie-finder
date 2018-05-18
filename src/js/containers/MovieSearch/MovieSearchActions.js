import axios from "axios";
import thunk from "redux-thunk";
import regeneratorRuntime from "regenerator-runtime";
const rootURL = "https://omdbapi.com/?s=";
const detailURL = "https://omdbapi.com/?i=";
const apikey = "8730e0e";
//8730e0e
//b95c5529

export function searchMovies(query, dispatch) {
  const url = `${rootURL}${query}&apikey=${apikey}`;
  console.log({ url });
  axios
    .get(url)
    .then(async res => {
      let pendingPlots = [];
      let movies = res.data.Search;
      for (let movie of movies) {
        pendingPlots.push(
          axios
            .get(`${detailURL}${movie.imdbID}&apikey=${apikey}`)
            .then(res => {
              return {
                plot: res.data.Plot,
                awards: res.data.Awards,
                metaScore: res.data.Metascore,
                releaseDate: res.data.Released,
                runTime: res.data.Runtime,
                rating: res.data.imdbRating,
                genre: res.data.Genre
              };
            })
        );
      }
      const finalPlots = await axios.all(pendingPlots);
      for (let i = 0; i < movies.length - 1; i++) {
        movies[i].plot = finalPlots[i].plot;
        movies[i].awards = finalPlots[i].awards;
        movies[i].metaScore = finalPlots[i].metaScore;
        movies[i].releaseDate = finalPlots[i].releaseDate;
        movies[i].runTime = finalPlots[i].runTime;
        movies[i].rating = finalPlots[i].rating;
        movies[i].genre = finalPlots[i].genre;
      }
      console.log({ movies });
      console.log({ finalPlots });
      dispatch(getAllMoviesFromSearch(movies));
    })
    .catch(console.error);
}

export function getAllMoviesFromSearch(movies) {
  return {
    type: "GET_ALL_MOVIES",
    payload: movies
  };
}

export function getMovieDetails(imdbID) {
  return {
    type: "GET_MOVIE_DETAILS",
    payload: axios.get(`${detailURL}${imdbID}&apikey=${apikey}`)
  };
}
