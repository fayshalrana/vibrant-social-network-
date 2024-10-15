import {configureStore} from '@reduxjs/toolkit';
import { getAllUsersReducer, postReducer, userReducer } from './Reducers/UserReducer';
import { likeReducer } from './Reducers/post';

const store = configureStore({
    reducer:{
        user:userReducer,
        postOfFollowingUsers:postReducer,
        allUsers:getAllUsersReducer,
        like:likeReducer
    }
});


export default store;