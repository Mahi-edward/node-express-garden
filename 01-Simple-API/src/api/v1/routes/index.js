const express = require("express");
const users = require("../data/users")

const router = express.Router();

// get users API
router.get("/users", (req, res) => {

    if (users.length === 0) {
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json({ success: true, data: [...users] })

})

// get single user API
router.get("/users/:userId", (req, res) => {

    const { userId } = req.params;

    // find the single user details
    const singleUser = users.find((user) => user.id === Number(userId));

    // if suppose user not found in the given id indicate the error message
    if (!singleUser) {
        return res.status(200).json({ success: true, message: `User not found given Id ${userId}` })
    }

    // return the searched user
    res.status(200).json({ success: true, message: "User fetched successfullly", data: { singleUser } })
})

// create the new user 
router.post("/users", (req, res) => {

    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json({ success: true, messgae: "Please provide a valid user details" })
    }

    // check the new user Id It's already created or not
    const isUserAlreadyPresent = users.find((user) => user.id === Number(id))

    // if user Id already present return a error
    if (isUserAlreadyPresent) {
        return res.status(400).json({ success: true, messgae: "This user Id already created, please try another one" })
    }

    // return a new created user details
    const newUser = { id, name }
    res.status(201).json({ success: true, message: "User created successfully", data: { newUser } })
})


// update the given user
router.put("/users/:userId", (req, res) => {

    const { userId } = req.params;
    const { firstName } = req.body;

    const hasValidUser = users.find((user) => user.id === Number(userId))

    if (!hasValidUser) {
        return res.status(400).json({ success: true, message: "Please provide a valid user Id" })
    }

    if (!firstName) {
        return res.status(400).json({ success: false, message: "Please provide a valid details" })
    }

    // map all the users - update the given user replace with new value
    const updatedUsers = users.map((user) => {
        if (user.id === Number(userId)) {
            user.firstName = firstName
        }
        return user;
    }) || []


    // return all the users with updated user details
    res.status(200).json({ success: true, message: "User updated succssfully", data: updatedUsers })
})

// delete the given user
router.delete("/users/:userId", (req, res) => {

    const { userId } = req.params;

    const hasValidUser = users.find((user) => user.id === Number(userId))

    // If the given user not present in the users json array, return an error 
    if (!hasValidUser) {
        return res.status(400).json({ success: true, message: "Please provide a valid user Id" })
    }

    // filter the selecte userId from users json array and return the list 
    // (just for demo purpose actual scenario not returned all user after deleting need to call get request)
    const filteredUsers = users.filter((user) => user.id !== Number(userId)) || []

    res.status(200).json({ success: "User deleted successfully", data: filteredUsers })

})

module.exports = router;