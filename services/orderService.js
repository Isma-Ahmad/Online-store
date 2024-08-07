const db = require('../models');


const createOrder = async (orderData) => {
    try {
        
        return await db.Order.create(orderData);
    } catch (error) {
        throw new Error('Error creating order: ' + error.message);
    }
};


const updateOrder = async (orderId, orderData) => {
    try {
        const order = await db.Order.findOne({ where: { order_id: orderId } });
        if (!order) {
            throw new Error('Order not found');
        }
        return await order.update(orderData);
    } catch (error) {
        throw new Error('Error updating order: ' + error.message);
    }
};


const deleteOrder = async (orderId) => {
    try {
        const order = await db.Order.findOne({ where: { order_id: orderId } });
        if (!order) {
            throw new Error('Order not found');
        }
        await order.destroy();
    } catch (error) {
        throw new Error('Error deleting order: ' + error.message);
    }
};


const getOrder = async (orderId) => {
    try {
        const order = await db.Order.findOne({ where: { order_id: orderId } });
        if (!order) {
            throw new Error('Order not found');
        }
        return order;
    } catch (error) {
        throw new Error('Error retrieving order: ' + error.message);
    }
};


const getAllOrders = async () => {
    try {
        return await db.Order.findAll();
    } catch (error) {
        throw new Error('Error retrieving orders: ' + error.message);
    }
};

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrders
};
