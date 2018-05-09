import React from "react";

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="pageTitle"> Movie Finder </h1>

        <input className="userInput" />
        <button>Go!</button>

        <div className="card w-100">
          <div className="row">
            <div className="col-3">
              <img className="w-100" alt="Img goes here" />
            </div>
            <div className="col-9 p-4">
              <h2>Movie Title goes here</h2>
              <h4>Movie Year goes here</h4>
              <hr />
              <p>
                Movie Plot goes here Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dicta dolore, obcaecati aliquid, consequatur
                neque veritatis hic, nesciunt perspiciatis animi suscipit
                temporibus unde. Explicabo ipsa aliquam illo a iusto eos
                facilis.
              </p>
              <button className="btn btn-primary float-right" href="#">
                More Information
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieSearchContainer;
