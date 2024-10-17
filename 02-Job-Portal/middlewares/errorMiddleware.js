
// Error middleware
const errorMiddleware = (err, req, res, next) => {

    console.log(err);

    res.status(500).send({
        isSuccess: false,
        message: "Something went wrong",
        err,
    })
}

export default errorMiddleware