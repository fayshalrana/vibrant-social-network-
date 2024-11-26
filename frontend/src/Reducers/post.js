import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  message: null,
  error: null,
  post: null, // Add post data here if necessary
};

export const likeReducer = createReducer(initialState, (builder) => {
    builder
  //   for user login 
      .addCase('likeRequest', (state) => {
        state.loading = true;
      })
      .addCase('likeSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('likeFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = false
      })
      .addCase('clearErrors', (state) => {
        state.error = null;
      })
      .addCase('clearMessage', (state) => {
        state.message = null;
      })

  //   for comment
      .addCase('commentRequest', (state) => {
        state.loading = true;
      })
      .addCase('commentSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase('commentFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = false
      })

          // For create post
    .addCase('createPostRequest', (state) => {
      state.loading = true;
    })
    .addCase('createPostSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.post = action.payload.post; // Store the post data in state
    })
    .addCase('createPostFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticate = false; // Handle authentication failure if needed
    })
    .addCase('clearCreatePostErrors', (state) => {
      state.error = null;
    })
    .addCase('clearCreatePostMessage', (state) => {
      state.message = null;
    });
    })