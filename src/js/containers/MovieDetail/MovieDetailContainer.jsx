import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieDetails } from "../MovieSearch/MovieSearchActions";

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
      const { dispatch, imdbID } = this.props;
      dispatch(getMovieDetails( {imdbID} ))
    }

    render() {
      const { movie } = this.props;
        return (
            <div>
      <h1 className="text-center">Movie Finder</h1>
      <hr />
      
      <div className="row">
        <div className="col-5">
          <img alt='Movie IMG goes here' className="w-100" />
        </div>
        <div className="col-7">
          <div className="card">
            <div className="card-header">
              <strong>Movie Details</strong>
            </div>
            <div className="card-body">
              <h3>{movie.Search.Title}</h3>
              <span className="badge badge-pill badge-primary mr-2"> Released {movie.Search.Year}</span>
              <span className="badge badge-pill badge-primary mr-2">{movie.Search.Runtime}</span>
              <span className="badge badge-pill badge-primary mr-2">{movie.Search.Genre}</span>
              <p className="mt-3">{movie.Search.Plot}</p>
              <p>{movie.Search.Awards}</p>

              <p className="mt-3">
                <span>
                  <strong>Metascore: </strong>
                </span>
                {movie.Search.Metascore} / 100
              </p>
              <p>
                <span>
                  <strong>IMDB: </strong>
                </span>
                {movie.Search.imdbRating}
              </p>
            </div>
          </div>
        </div>
      </div>

        <button className="btn btn-primary mt-4">Go Back</button>
        
    </div>
        )
    }
}

export default MovieDetailContainer;