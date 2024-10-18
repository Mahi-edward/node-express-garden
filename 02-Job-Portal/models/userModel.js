import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Passward minimum 6 characters required"]
    },
    location: {
        type: String,
        default: "India"
    },

},
    { timestamps: true }
);


// Middlewares

// hase the password, before save the document in the DB collection
userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

})

// In DB collection name User -> users will create 
// Automatically convert singular to Plural and converts lowercases
export default mongoose.model("User", userSchema)