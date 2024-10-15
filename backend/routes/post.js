const express = require('express');
const { createPost, likeDislike, deletePost, getFollowingPost, updateCaption, commentOnPost, deleteComment } = require('../controllers/post');
const { isAuthenticate } = require('../Middlewares/auth');
const router = express.Router();

router.route('/post/upload').post(isAuthenticate, createPost);

router.route('/post/:id').get(isAuthenticate, likeDislike).put(isAuthenticate, updateCaption).delete(isAuthenticate, deletePost);

router.route('/posts').get(isAuthenticate, getFollowingPost);

router.route('/post/comment/:id').put(isAuthenticate, commentOnPost).delete(isAuthenticate, deleteComment);


module.exports = router;