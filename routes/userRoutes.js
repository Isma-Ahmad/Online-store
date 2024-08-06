
const express = require('express');
const userController = require('../controllers/userController');
const middleware = require('../middleware/middleware');
const router = express.Router();


router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.put('/update', middleware.verifyToken, userController.updateUser);

module.exports = router;
