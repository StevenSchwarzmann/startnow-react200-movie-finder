import axios from "axios";
import thunk from 'redux-thunk';
import regeneratorRuntime from "regenerator-runtime";
const rootURL = "https://omdbapi.com/?s=";
const detailURL = "https://omdbapi.com/?i=";
const apikey = "8730e0e";

export function searchMovies(query, dispatch) {
  
  axios.get(`${rootURL}${query}&apikey=${apikey}`)
    .then( async res => {
      let pendingPlots = [];
      let movies = res.data.Search
      for( let movie of movies){
        pendingPlots.push( axios.get(`${detailURL}${movie.imdbID}&apikey=${apikey}`).then( res => {
          return {plot: res.data.Plot,
                  awards: res.data.Awards,
                  metaScore: res.data.Metascore,
                  releaseDate: res.data.Released,
                  runTime: res.data.Runtime,
                  rating: res.data.imdbRating}
        }) )
      }
      const finalPlots = await axios.all(pendingPlots)
      for(let i = 0; i<movies.length-1; i++){
        movies[i].plot = finalPlots[i].plot
        movies[i].awards = finalPlots[i].awards
        movies[i].metaScore = finalPlots[i].metaScore
        movies[i].releaseDate = finalPlots[i].releaseDate
        movies[i].runTime = finalPlots[i].runTime
        movies[i].rating = finalPlots[i].rating
      }
      return {
        type: "GET_ALL_MOVIES",
        payload: movies
      }
    })
    .catch(console.error)
}

export function getMovieDetails(imdbID) {
  return {
    type: "GET_MOVIE_DETAILS",
    payload: axios.get(`${detailURL}${imdbID}&apikey=${apikey}`)
  };
}
