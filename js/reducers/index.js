import { combineReducers } from 'redux';
import movieListReducer from './movieListReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  movieList: movieListReducer,
  loaded: loadingReducer,
});
