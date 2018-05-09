const rootURL = 'https://omdbapi.com/?t=';
const apikey = '8730e0e';

export function getMovie(movie) {
    const req = axios.get(`${rootURL}${movie}&apikey=${apikey}`)
    return {
        type: 'GET_MOVIE',
        payload: req
    }
}