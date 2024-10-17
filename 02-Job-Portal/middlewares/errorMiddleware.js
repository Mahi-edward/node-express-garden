
// Error middleware
const errorMiddleware = (err, req, res, next) => {

    console.log(err.name);

    // default error object
    const defaultErrors = {
        isSuccess: false,
        statusCode: 500,
        message: err
    }

    // missing field validation error
    if (err.name === "ValidationError") {
        console.log("Mahesh")
        defaultErrors.statusCode = 400
        defaultErrors.message = Object.values(err.errors).map(item => item.message).join(",")
    }

    res.status(defaultErrors.statusCode).json({ message: defaultErrors.message });

}

export default errorMiddleware