import { RECEIVE_POSTS } from '../actions/movieListAction';

export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return true;
    default:
      return state;
  }
}
