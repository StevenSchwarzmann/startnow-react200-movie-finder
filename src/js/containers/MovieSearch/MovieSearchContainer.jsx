import React from "react";
import { getMovie, getMovieDetails } from './MovieSearchActions';
import { Link } from 'react-router-dom';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
  }

  handleSearch = (e) => {
  const { dispatch, search } = this.props;
  dispatch(getMovie("birdman"))

  }

  handleDetails = (e) => {
    //this is probably close but wrong...
    const { dispatch, imbdID } = this.props
    dispatch(getMovieDetails({imbdID}))
  }

  render() {
    const { movie } = this.props;
    console.log(movie.Search)
    return (
      <div className="container">
        <h1 className="pageTitle"> Movie Finder </h1>

        <input className="userInput"/>
        <button onClick={this.handleSearch}>Go!</button>

        <div className="card w-100">
        {movie.Search && movie.Search.map(mov => (
          <div className="row">
            <div className="col-3">
              <img className="w-100" src={mov.Poster} />
            </div>
            <div className="col-9 p-4">
              <h2>{mov.Title}</h2>
              <h4>{mov.Year}</h4>
              <hr />
              <p>
                <strong>MOVIE PLOT GOES HERE </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore architecto expedita ipsa aut eaque illum recusandae sequi? Vel quaerat nam perferendis labore aperiam nihil ratione ex sit quisquam doloribus.
              </p>
              < Link to={`/movie/${mov.imdbID}`}>
              <button className="btn btn-primary float-right" onClick={this.handleDetails}>
                More Information
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default MovieSearchContainer;
