const defaultState = {
  movie: {}
};

export default function movieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case "GET_MOVIE_FULFILLED":
      return {
        ...state,
        movie: payload.data
      };
      break;
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        movie: null
        //this need to be corrected...
      };

      default: {
          return state;
      }
  }
}
