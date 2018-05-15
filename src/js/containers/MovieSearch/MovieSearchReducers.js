const defaultState = {
  movies: null
};

export default function movieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case "GET_ALL_MOVIES":
      return {
        ...state,
        movies: payload
      }
    case "GET_MOVIE_DETAILS_FULFILLED":
      return {
        ...state,
        movie: payload.data
        //this need to be corrected...unsure about payload
      };

      default: {
          return state;
      }
  }
}
