export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export function fetchPostsRequest  ()  {
  return {type: FETCH_POSTS_REQUEST}
};

export function fetchPostsSuccess (posts) {
  return {type: FETCH_POSTS_SUCCESS,payload: posts}
};

export function fetchPostsFailure (error)  {
  return {type: FETCH_POSTS_FAILURE,payload: error}
};

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
    
        fetch(`https://jsonplaceholder.typicode.com/posts`) // Replace with your API endpoint and postId
          .then((response) => {
            if (!response.ok) {
              throw new Error('Request failed');
            }
            return response.json();
          })
          .then((post) => {
            dispatch(fetchPostsSuccess(post));
          })
          .catch((error) => {
            dispatch(fetchPostsFailure(error.message));
          });
      };
};

