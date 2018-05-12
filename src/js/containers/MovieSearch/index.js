import MovieSearchContainer from "./MovieSearchContainer";
import { connect } from "react-redux";

function mapStoreToProps(store) {
  return {
    movies: store.search.movies
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);
