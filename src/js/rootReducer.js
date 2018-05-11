import { combineReducers } from 'redux';
import movieSearchReducer from './containers/MovieSearch/MovieSearchReducers'

const rootReducer = combineReducers({
    //add reducers
    search: movieSearchReducer

})

export default rootReducer;