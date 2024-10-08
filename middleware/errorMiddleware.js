
const errorHandler = (err, req, res, next) => {
    
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    console.error(err);

    
    if (statusCode === 404) {
        message = 'Resource not found';
    } else if (statusCode === 400) {
        message = 'Bad Request';
    }

    res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;
