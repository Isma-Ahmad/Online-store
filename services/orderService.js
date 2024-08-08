const db = require('../models');


const createOrder = async (orderData, userId) => {
   
        const order = await db.Order.create({ ...orderData, user_id: userId });
        return order;
    
};


const getAllOrders = async (userId, userType) => {
  
        if (userType === 'admin') {
            const orders = await db.Order.findAll();
            return orders;
        } else {
            const orders = await db.Order.findAll({ where: { user_id: userId } });
            return orders;
        }
    
};


const getOrderById = async (orderId, userId, userType) => {
   
        const order = await db.Order.findByPk(orderId);
        if (!order) throw new Error('Order not found');

        if (userType !== 'admin' && order.user_id !== userId) {
            throw new Error('Unauthorized to access this order');
        }

        return order;
   
};


const updateOrder = async (orderId, updatedData, userType) => {
  
        if (userType !== 'admin') {
            throw new Error('Only admins can update orders');
        }
        const order = await db.Order.findByPk(orderId);
        if (!order) throw new Error('Order not found');
        return await order.update(updatedData);
   
};


const deleteOrder = async (orderId, userType) => {
  
        if (userType !== 'admin') {
            throw new Error('Only admins can delete orders');
        }
        const order = await db.Order.findByPk(orderId);
        if (!order) throw new Error('Order not found');
        await order.destroy();
        return { message: 'Order deleted successfully' };
    
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
