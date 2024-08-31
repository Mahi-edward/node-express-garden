const express = require("express");
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/usersController");

// initiate the router
const router = express.Router();

// get users API
router.get("/users", getUsers)

// get single user API
router.get("/users/:userId", getUserById)

// create the new user 
router.post("/users", createUser)

// update the given user
router.put("/users/:userId", updateUser)

// delete the given user
router.delete("/users/:userId", deleteUser)


// export the router
module.exports = router;