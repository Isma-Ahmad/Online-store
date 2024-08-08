const orderService = require('../services/orderService');



const createOrder = async (req, res) => {
    
        const userId = req.user.user_id;
        const orderData = req.body;
        const order = await orderService.createOrder(orderData, userId);
        res.status(201).json(order);
   
};


const getAllOrders = async (req, res) => {
   
        const userId = req.user.user_id;
        const userType = req.user.userType;
        const orders = await orderService.getAllOrders(userId, userType);
        res.status(200).json(orders);
    
};


const getOrderById = async (req, res) => {
 
        const userId = req.user.user_id;
        const userType = req.user.userType;
        const orderId = req.params.id;
        const order = await orderService.getOrderById(orderId, userId, userType);
        res.status(200).json(order);
   
};


const updateOrder = async (req, res) => {
  
        const userType = req.user.userType;
        const orderId = req.params.id;
        const updatedData = req.body;
        const updatedOrder = await orderService.updateOrder(orderId, updatedData, userType);
        res.status(200).json(updatedOrder);
   
};


const deleteOrder = async (req, res) => {
   
        const userType = req.user.userType;
        const orderId = req.params.id;
        const result = await orderService.deleteOrder(orderId, userType);
        res.status(200).json(result);
   
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
