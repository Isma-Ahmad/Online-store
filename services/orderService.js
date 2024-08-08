const db = require('../models');


const createOrder = async (orderData, userId) => {
    try {
        const order = await db.Order.create({ ...orderData, user_id: userId });
        return order;
    } catch (error) {
        throw new Error('Error creating order: ' + error.message);
    }
};


const getAllOrders = async (userId, userType) => {
    try {
        if (userType === 'admin') {
            const orders = await db.Order.findAll();
            return orders;
        } else {
            const orders = await db.Order.findAll({ where: { user_id: userId } });
            return orders;
        }
    } catch (error) {
        throw new Error('Error retrieving orders: ' + error.message);
    }
};


const getOrderById = async (orderId, userId, userType) => {
    try {
        const order = await db.Order.findByPk(orderId);
        if (!order) throw new Error('Order not found');

        if (userType !== 'admin' && order.user_id !== userId) {
            throw new Error('Unauthorized to access this order');
        }

        return order;
    } catch (error) {
        throw new Error('Error retrieving order: ' + error.message);
    }
};


const updateOrder = async (orderId, updatedData, userType) => {
    try {
        if (userType !== 'admin') {
            throw new Error('Only admins can update orders');
        }
        const order = await db.Order.findByPk(orderId);
        if (!order) throw new Error('Order not found');
        return await order.update(updatedData);
    } catch (error) {
        throw new Error('Error updating order: ' + error.message);
    }
};


const deleteOrder = async (orderId, userType) => {
    try {
        if (userType !== 'admin') {
            throw new Error('Only admins can delete orders');
        }
        const order = await db.Order.findByPk(orderId);
        if (!order) throw new Error('Order not found');
        await order.destroy();
        return { message: 'Order deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting order: ' + error.message);
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
