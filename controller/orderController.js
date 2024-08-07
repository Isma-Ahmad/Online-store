const orderService = require('../services/orderService');



const createOrder = async (req, res) => {
    try {
        
        const orderData = { ...req.body, user_id: req.user.user_id };
        const order = await orderService.createOrder(orderData);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const orderData = req.body;
        const order = await orderService.updateOrder(orderId, orderData);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        await orderService.deleteOrder(orderId);
        res.status(204).send(); // No content
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await orderService.getOrder(orderId);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrders
};
