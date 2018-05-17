import React from "react";
import { searchMovies, getMovieDetails } from "./MovieSearchActions";
import { Link } from "react-router-dom";

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleSearch = e => {
    const { dispatch, query } = this.props;
    searchMovies(this.state.text, dispatch);
  };

  handleDetails = e => {
    //this is probably close but wrong...
    const { dispatch, imbdID } = this.props;
    dispatch(getMovieDetails({ imbdID }));
  };

  handleTextChange = e => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  render() {
    const { movies } = this.props;
    console.log("movies in render func");
    console.log({ movies });

    return (
      <div className="container">
        <h1 className="pageTitle"> Movie Finder </h1>

        <div className="searchDiv">
          <input
            className="userInput"
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="Enter Movie title..."
          />
          <button className="button" onClick={this.handleSearch}>
            Go!
          </button>
        </div>
        <div className="card w-100">
          {movies &&
            movies.map(mov => {
              const to = {
                pathname: `/movie/${mov.imdbID}`,
                movie: mov
              };
              return (
                <div className="row">
                  <div className="col-3">
                    <img className="w-100" src={mov.Poster} />
                  </div>
                  <div className="col-9 p-4">
                    <h2>{mov.Title}</h2>
                    <h4>{mov.Year}</h4>
                    <hr />
                    <p>{mov.plot}</p>
                    <Link to={to}>
                      <button
                        className="btn btn-primary float-right"
                        onClick={this.handleDetails}
                      >
                        More Information
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default MovieSearchContainer;
