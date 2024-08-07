const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authenticate = require('../middleware/userAuth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update', authenticate, userController.updateUser); 

module.exports = router;
