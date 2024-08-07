const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/userAuth');
const productController = require('../controller/productController');


router.get('/get/:id', authenticateToken, productController.getProduct);

router.get('/getAll', authenticateToken, productController.getAllProducts);

router.post('/', authenticateToken, productController.createProduct);

router.put('/update/:id', authenticateToken, productController.updateProduct);

router.delete('/:id', authenticateToken, productController.deleteProduct);


module.exports = router;
