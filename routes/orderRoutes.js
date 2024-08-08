const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const authenticateToken = require('../middleware/userAuth');


router.get('/get/:id', authenticateToken, orderController.getOrderById);
router.get('/getAll', authenticateToken, orderController.getAllOrders);
router.post('/', authenticateToken, orderController.createOrder);
router.put('/update/:id', authenticateToken, orderController.updateOrder);
router.delete('/delete/:id', authenticateToken, orderController.deleteOrder);


module.exports = router;
