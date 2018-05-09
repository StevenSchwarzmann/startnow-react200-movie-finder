//ASK IF FULFILLED IS REQ AND WHY AGAIN
const defaultState = {
    movie: ''
}

export default function movieSearchReducer (defaultState, action) {
    const { type, payload } = action;
    
    switch (action.type) {
       case 'GET_MOVIE_FULFILLED':
        return {
            ...state,
            movie: payload
        }

    }
}
   