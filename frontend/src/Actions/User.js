import axios from 'axios';


// login user
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post('http://localhost:4000/api/v1/login', { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    // console.log('Response data:', data);

    dispatch({
      type: 'loginSuccess',
      payload: data.user,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Error:', errorMessage);
    dispatch({
      type: 'loginFailure',
      payload: errorMessage,
    });
  }
};


// register user
export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'registerRequest' });

    const { data } = await axios.post('http://localhost:4000/api/v1/register', { name, email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    // console.log('Response data:', data);

    dispatch({
      type: 'registerSuccess',
      payload: data.user,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Error:', errorMessage);
    dispatch({
      type: 'registerFailure',
      payload: errorMessage,
    });
  }
};

//User Logout
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: 'logoutRequest' });

    await axios.get('http://localhost:4000/api/v1/logout', {
      withCredentials: true,
    });

    dispatch({
      type: 'logoutSuccess',
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Error:', errorMessage);
    dispatch({
      type: 'logoutFailure',
      payload: errorMessage,
    });
  }
};


// get logged user 
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: 'loadUserRequest' });

    const { data } = await axios.get('http://localhost:4000/api/v1/me', {
      withCredentials: true, // Ensure cookies are sent with the request
    });

    // console.log('Response data:', data);

    dispatch({
      type: 'loadUserSuccess',
      payload: data.user,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Error:', errorMessage);
    dispatch({
      type: 'loadUserFailure',
      payload: errorMessage,
    });
  }
};

//Get following users posts
export const getFollowingUserPosts = () => async (dispatch)=>{
  try {
    dispatch({ type: 'fetchPostsRequest' });

    const { data } = await axios.get('http://localhost:4000/api/v1/posts', {
      withCredentials: true, // Ensure cookies are sent with the request
    });

    // console.log('Response data:', data);

    dispatch({
      type: 'fetchPostsSuccess',
      payload: data.posts,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Error:', errorMessage);
    dispatch({
      type: 'fetchPostsFailure',
      payload: errorMessage,
    });
  }
}


//Get all users
export const getAllUsers = () => async (dispatch)=>{
  try {
    dispatch({ type: 'fetchAllUsersRequest' });

    const { data } = await axios.get('http://localhost:4000/api/v1/users', {
      withCredentials: true, // Ensure cookies are sent with the request
    });

    console.log('Response data:', data);

    dispatch({
      type: 'fetchAllUsersSuccess',
      payload: data.users,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Error:', errorMessage);
    dispatch({
      type: 'fetchAllUsersFailure',
      payload: errorMessage,
    });
  }
}

// Get single user by ID
export const getUserById = (userId) => async (dispatch) => {
  try {
    dispatch({ type: 'fetchUserRequest' });

    const { data } = await axios.get(`http://localhost:4000/api/v1/users/${userId}`, {
      withCredentials: true, // Ensure cookies are sent with the request
    });

    console.log('Response data:', data);

    dispatch({
      type: 'fetchUserSuccess',
      payload: data.user,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Error:', errorMessage);
    dispatch({
      type: 'fetchUserFailure',
      payload: errorMessage,
    });
  }
};
