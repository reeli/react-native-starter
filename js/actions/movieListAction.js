export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit,
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(subreddit, responseData) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: responseData.subjects,
    receiveAt: Date.now(),
  };
}

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
export function fetchMovieListAction(subreddit) {
  return function (dispatch) {
    dispatch(requestPosts(REQUEST_URL));

    return fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(receivePosts(subreddit, responseData));
      });
  };
}
