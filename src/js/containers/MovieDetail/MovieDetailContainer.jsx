import React from 'react';

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
              <h3>Movie Title goes here</h3>
              <span className="badge badge-pill badge-primary mr-2">Movie year</span>
              <span className="badge badge-pill badge-primary mr-2">Movie Length</span>
              <span className="badge badge-pill badge-primary mr-2">Movie genre</span>
              <p className="mt-3">Movie Synopsis goes here</p>
              <p>Movie's awards go here?</p>

              <p className="mt-3">
                <span>
                  <strong>Metascore: </strong>
                </span>
                MetaScore goes here
              </p>
              <p>
                <span>
                  <strong>IMDB: </strong>
                </span>
                IMDB rating goes here
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