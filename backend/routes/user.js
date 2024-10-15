const express = require("express");
const {
  register,
  login,
  followUser,
  logout,
  updatePassword,
  updatedProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUser,
  forGotPassword,
  resetPassword
} = require("../controllers/user");
const { isAuthenticate } = require("../Middlewares/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/follow/:id").get(isAuthenticate, followUser);
router.route("/update/password").put(isAuthenticate, updatePassword);
router.route("/update/profile").put(isAuthenticate, updatedProfile);
router.route("/delete/me").delete(isAuthenticate, deleteMyProfile);
router.route("/me").get(isAuthenticate, myProfile);
router.route("/user/:id").get(isAuthenticate, getUserProfile);
router.route("/users").get(isAuthenticate, getAllUser);
router.route("/forgot/password").post( forGotPassword);
router.route('/password/reset/:token').put( resetPassword)
module.exports = router;
