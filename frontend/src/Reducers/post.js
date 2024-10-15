import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

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
    })