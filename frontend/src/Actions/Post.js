import axios from 'axios';
export const likePost = (id) => async (dispatch)=>{
    try {
      dispatch({ type: 'likeRequest' });
  
      const { data } = await axios.get(`http://localhost:4000/api/v1/post/${id}`, {
        withCredentials: true, // Ensure cookies are sent with the request
      });
  
      console.log('Response data:', data);
  
      dispatch({
        type: 'likeSuccess',
        payload: data.message,
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error('Error:', errorMessage);
      dispatch({
        type: 'likeFailure',
        payload: errorMessage,
      });
    }
  }

  export const addComment = (id, comment) => async (dispatch) => {
    try {
      dispatch({ type: 'commentRequest' });
  
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/post/comment/${id}`,
        { comment }, // Pass comment inside data object
        {
          withCredentials: true, // Ensure cookies are sent with the request
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
  
      console.log('Response data:', data);
  
      dispatch({
        type: 'commentSuccess',
        payload: data.message,
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error('Error:', errorMessage);
      dispatch({
        type: 'commentFailure',
        payload: errorMessage,
      });
    }
  };
  



  // Action to create a post
  export const createPost = (caption, image) => async (dispatch) => {
    try {
      dispatch({ type: 'createPostRequest' });
  
      // Sending data as JSON
      const { data } = await axios.post(
        'http://localhost:4000/api/v1/post/upload',
        {
          caption, // Simple JSON payload
          image,   // Base64-encoded image or image URL
        },
        {
          withCredentials: true, // Send cookies if needed
          headers: {
            'Content-Type': 'application/json', // JSON request
          },
        }
      );
  
      console.log('Response data:', data);
  
      // Dispatch success or failure
      if (data && data.message) {
        dispatch({
          type: 'createPostSuccess',
          payload: data.message,
        });
      } else {
        dispatch({
          type: 'createPostFailure',
          payload: 'Post creation failed, no message in response.',
        });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error('Error:', errorMessage);
  
      dispatch({
        type: 'createPostFailure',
        payload: errorMessage,
      });
    }
  };
  