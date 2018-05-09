import { combineReducers } from 'redux';
import movieSearhReducer from './containers/MovieSearch/MovieSearchReducers'

const rootReducer = combineReducers({
    //add reducers
    search: movieSearhReducer

})

export default rootReducer;