const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/userAuth');
const productController = require('../controller/productController');
const uploadImageMiddleware = require('../middleware/uploadMiddleware');

router.get('/get/:id', authenticateToken, productController.getProductById);

router.get('/getAll', authenticateToken, productController.getAllProducts);

router.post('/', authenticateToken, uploadImageMiddleware,productController.createProduct);

router.put('/update/:id', authenticateToken,uploadImageMiddleware, productController.updateProduct);

router.delete('/:id', authenticateToken, productController.deleteProduct);


module.exports = router;
