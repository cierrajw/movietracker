import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  movies: movieReducer
})

export default rootReducer;
