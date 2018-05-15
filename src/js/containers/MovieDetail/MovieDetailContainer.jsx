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
      const { movie } = this.props.location;
      console.log('movieDetailHere', this.props)
        return (
            <div>
      <h1 className="text-center">{movie.Title}</h1>
      <hr />
      
      <div className="row">
        <div className="col-5">
          <img src={movie.Poster} className="w-100" />
        </div>
        <div className="col-7">
          <div className="card">
            <div className="card-header">
              <strong>Movie Details</strong>
            </div>
            <div className="card-body">
              <h3>{movie.Title}</h3>
              <span className="badge badge-pill badge-primary mr-2"> {movie.releaseDate}</span>
              <span className="badge badge-pill badge-primary mr-2">{movie.runTime}</span>
              <span className="badge badge-pill badge-primary mr-2">{movie.genre}</span>
              <p className="mt-3">{movie.plot}</p>
              <p>{movie.awards}</p>

              <p className="mt-3">
                <span>
                  <strong>Metascore: </strong>
                </span>
                {movie.metaScore} / 100
              </p>
              <p>
                <span>
                  <strong>IMDB: </strong>
                </span>
                {movie.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
        <Link to='/'>
        <button className="btn btn-primary mt-4">Go Back</button>
        </Link>
    </div>
        )
    }
}

export default MovieDetailContainer;