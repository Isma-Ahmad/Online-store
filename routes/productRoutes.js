const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/userAuth');
const productController = require('../controller/productController');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

router.get('/get/:id', authenticateToken, productController.getProductById);

router.get('/getAll', authenticateToken, productController.getAllProducts);

router.post('/', authenticateToken, upload.single('image'), productController.createProduct);

router.put('/update/:id', authenticateToken, upload.single('image'), productController.updateProduct);

router.delete('/:id', authenticateToken, productController.deleteProduct);


module.exports = router;
