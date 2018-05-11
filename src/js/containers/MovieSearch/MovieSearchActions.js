import axios from 'axios';
const rootURL = 'https://omdbapi.com/?s=';
const detailURL = 'https://omdbapi.com/?i=';
const apikey = '8730e0e';

export function getMovie(movie) {
    console.log(movie)
    return {
        type: 'GET_MOVIE',
        payload: axios.get(`${rootURL}${movie}&apikey=${apikey}`)
    }
}

export function getMovieDetails(movieID) {
    return {
        type: 'GET_MOVIE_DETAILS',
        payload: axios.get(`${detailURL}${movieID}&apikey=${apikey}`)
    }
}