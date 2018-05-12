import MovieDetailContainer from "./MovieDetailContainer";
import { connect } from "react-redux";

function mapStoreToProps(store) {
  return {
    movie: store.search.movie
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);
