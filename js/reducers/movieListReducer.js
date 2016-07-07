import { RECEIVE_POSTS } from '../actions/movieListAction';

export default function movieListReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
}

