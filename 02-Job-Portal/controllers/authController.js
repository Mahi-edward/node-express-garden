import userModel from "../models/userModel.js"

export const userRegisterController = async (req, res, next) => {

    try {
        // destructure the values
        const { name, email, password } = req.body

        // own validation - without library
        if (!name) {
            // return res.status(400).send({ isSuccess: false, message: "Please provide a name" })
            next( "Please provide a name")
        }

        if (!email) {
            // return res.status(400).send({ isSuccess: false, message: "Please provide a email" })
            next("Please provide an email")
        }

        if (!password) {
            // return res.status(400).send({ isSuccess: false, message: "Please provide a password" })
            next("Please provide a password")
        }

        // check if the user already exists in the DB
        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(400).send({
                isSuccess: false,
                message: "given user already registered"
            })
        }

        console.log(existingUser)

        const newUser = await userModel.create({ name, email, password })

        res.status(200).send({
            isSuccess: true, message: "Working fine", data: {
                newUser
            }
        })

    } catch (error) {
        next(error);
    }


}

