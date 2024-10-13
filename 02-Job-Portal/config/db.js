import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb database ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Database connection failed - ${error.message}`)
    }
}

export default connectDB;