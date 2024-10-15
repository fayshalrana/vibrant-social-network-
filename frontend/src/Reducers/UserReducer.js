import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
//   for user login 
    .addCase('loginRequest', (state) => {
      state.loading = true;
    })
    .addCase('loginSuccess', (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true
    })
    .addCase('loginFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false
    })

    // for user register 
    .addCase('registerRequest', (state) => {
      state.loading = true;
    })
    .addCase('registerSuccess', (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true
    })
    .addCase('registerFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false
    })

    // for load your data 
    .addCase('loadUserRequest', (state) => {
      state.loading = true;
    })
    .addCase('loadUserSuccess', (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true
    })
    .addCase('loadUserFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false
    })

    // for user Logout 
    .addCase('logoutRequest', (state) => {
      state.loading = true;
    })
    .addCase('logoutSuccess', (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.isAuthenticated = false
    })
    .addCase('logoutFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false
    })

      // for load Single User data 
      .addCase('fetchUserRequest', (state) => {
        state.loading = true;
      })
      .addCase('fetchUserSuccess', (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true
      })
      .addCase('fetchUserFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false
      })

    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});


// Post reducer
const postInitialState ={
  posts: [],
  loading: false,
  error: null,
}

export const postReducer = createReducer(postInitialState, (builder) => {
  builder
    .addCase('fetchPostsRequest', (state) => {
      state.loading = true;
      state.error = null; // Clear errors on request
    })
    .addCase('fetchPostsSuccess', (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase('fetchPostsFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});

//get all users
const usersInitialState ={

}

export const getAllUsersReducer = createReducer(usersInitialState, (builder) => {
  builder
    .addCase('fetchAllUsersRequest', (state) => {
      state.loading = true;
      state.error = null; // Clear errors on request
    })
    .addCase('fetchAllUsersSuccess', (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase('fetchAllUsersFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
