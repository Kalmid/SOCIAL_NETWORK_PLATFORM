// Example of an Axios request in your actions/postActions.js
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};
