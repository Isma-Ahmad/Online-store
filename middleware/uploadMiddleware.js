const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const uploadImageMiddleware = (req, res, next) => {
    upload.single('image')(req, res, (err) => {
        if (err) return next(err);
        next();
    });
};

module.exports = uploadImageMiddleware;
